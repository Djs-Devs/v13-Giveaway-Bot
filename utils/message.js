const config = require('../config.json');
module.exports = {
  giveaway:
    (config.everyoneMention ? "@everyone\n\n" : "") +
    "**Giveaway Started**",
  giveawayEnded:
    (config.everyoneMention ? "@everyone\n\n" : "") +
    "**Giveaway Emded**",
  drawing:  `Ends: **{timestamp}**`,
  inviteToParticipate: `React with 🎉 to participate!`,
  winMessage: "Congratulations, {winners}! You won **{this.prize}**!",
  embedFooter: "Giveaways",
  noWinner: "Giveaway cancelled, No valid participations.",
  hostedBy: "Hosted by: {this.hostedBy}",
  winners: "winner(s)",
  endedAt: "Ended at"
}
