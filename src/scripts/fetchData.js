const query = `
query getUserProfile($login:String!) {
  user(login: $login) {
		name
		url
		login
		avatarUrl
		bio
		location
		company
		email
		followers {
			totalCount
		}
		following {
			totalCount
		}
		starredRepositories {
			totalCount
		}
		status {
			emojiHTML
			message
		}
		repositories(first: 20, orderBy: { field: CREATED_AT, direction: DESC }) {
			totalCount
			nodes {
				id
				name
				description
				stargazerCount
				forkCount
				updatedAt
				isPrivate
				isTemplate
				primaryLanguage {
					name
					color
				}
				licenseInfo {
					name
					spdxId
				}
			}
		}
	}
}`;

export async function fetchUserData(username) {
  const GITHUB_API_ENDPOINT = "https://api.github.com/graphql";
  const resp = await fetch(GITHUB_API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables: { login: username },
    }),
  });

  return resp.json();
}

export function displayFetchError() {
  const errorTemplate = document.createElement("template");
  const body = document.querySelector("body");

  errorTemplate.innerHTML =
    '<div class="error">Error fetching data from GitHub</div>';
  body.append(errorTemplate.content);
}
