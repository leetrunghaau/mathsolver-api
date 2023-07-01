class AccountDTO {
  constructor(accountId, userId, password, role, modifiedAt) {
    this.accountId = accountId;
    this.userId = userId;
    this.password = password;
    this.role = role;
    this.modifiedAt = modifiedAt;
  }
}

module.exports = AccountDTO;