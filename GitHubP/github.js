class GitHub {
  constructor() {
    this.client_id = "56dd9f97095929701e47";
    this.client_secret = "e555b1821daa0fd3efd41eef8b9b830dc5889782";
}

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }$client_secret=${this.client_secret}`
    );
    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos`
    );

    const repos = await reposResponse.json();

    const profile = await profileResponse.json();

    return { profile, repos };
  }
}
