const cron = require('node-cron');
const db = require('../config/db');
const mailer = require('./mailer');

async function sendPendingParcelEmails() {
  const sql = `
    SELECT u.email, u.name, s.courier_name, s.tracking_id
    FROM users u 
    JOIN student_parcels s ON u.phone = s.phone
    WHERE s.status != 'Delivered'
    
    UNION

    SELECT u.email, u.name, f.courier_name, f.tracking_id
    FROM users u 
    JOIN faculty_parcels f ON u.phone = f.phone
    WHERE f.status != 'Delivered'
  `;

  db.query(sql, async (err, rows) => {
    if (err) throw err;

    for (const row of rows) {
      await mailer.sendMail(
        row.email,
        "Parcel Pickup Reminder",
        `<h3>Hello ${row.name},</h3>
         <p>Your parcel from <b>${row.courier_name}</b> (Tracking ID: <b>${row.tracking_id}</b>) 
         is still pending. Please collect it at the earliest.</p>`
      );
    }

    console.log("⏰ Daily notification task completed");
  });
}

// Run every day at 10:00 AM
cron.schedule("0 10 * * *", () => {
  console.log("Running Daily Parcel Notification Job at 10:00 AM...");
  sendPendingParcelEmails();
});


module.exports = { sendPendingParcelEmails };
