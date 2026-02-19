const { sendPendingParcelEmails } = require('../utils/scheduler');

exports.sendNow = async (req, res) => {
  try {
    await sendPendingParcelEmails();
    res.send("<h3>📨 Notifications sent successfully!</h3>");
  } catch (error) {
    console.error(error);
    res.send("<h3>❌ Error sending notifications</h3>");
  }
};
