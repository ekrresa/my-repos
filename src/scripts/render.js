import { calculateRelativeDate } from "./date";

export function renderProfile(data) {
  const profileContainer = document.querySelector("#profile-info");
  const profileTemplate = document.createElement("template");
  const profileHtmlString = `
						<div class="about">
							<div class="avatar" id="profile-avatar">
								<img id="profile__img" src="${data.avatarUrl}" alt="profile pic">
								<span class="dart">
									${data.status.emojiHTML}
									<span class="status__message">${data.status.message}</span>
								</span>
							</div>

							<div class="metadata">
								<h1 class="name">${data.name}</h1>
								<h3 class="username">${data.login}</h3>
							</div>
						</div>

						<div class="status status__mobile">
							<span class="dart">
								${data.status.emojiHTML}
								<span class="status__message">${data.status.message}</span>
							</span>
						</div>
						<p class="bio">${data.bio}</p>
						<button class="edit__btn">Edit profile</button>
						<div class="social__metrics">
							<span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path></svg>
							<span>${data.followers.totalCount}</span> followers</span>
								&nbsp;&middot;&nbsp;
							<span><span>${data.following.totalCount}</span> following</span>
							&nbsp;&middot;&nbsp;
							<span>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>

							 <span>${data.starredRepositories.totalCount}</span> </span>
						</div>

						<ul class="meta__list">
							<li class="meta__info"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"></path></svg>
							${data.company}</li>
							<li class="meta__info">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path></svg>
							${data.location}</li>
							<li class="meta__info"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM14.5 4.07v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81zm-13 1.74v6.441c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809z"></path></svg>
							${data.email}</li>
						</ul>
						`;

  profileTemplate.innerHTML = profileHtmlString;
  profileContainer.appendChild(profileTemplate.content);
}

export function renderRepoList(data) {
  const repoFragment = document.createDocumentFragment();
  const repoContainer = document.querySelector("#repo-container");

  // Map over array of repositories data
  data.forEach((node) => {
    const repoTemplate = document.createElement("template");
    const repoRowHtmlString = `<div class="repo__row">
							<div class="left__content">
								<div class="top__row">
									<a href="#" class="name">${node.name}</a>
									${node.isPrivate ? '<span class="extra">Private</span>' : ""}
								</div>

								${node.description ? `<div class="desc">${node.description}</div>` : ""}

								<div class="bottom__row">

								${
                  node.primaryLanguage
                    ? `<span class="language" style="background-color:${node.primaryLanguage.color};"></span>
										<span class="item">${node.primaryLanguage.name}</span>`
                    : ""
                }

								${
                  node.stargazerCount
                    ? `<span class="item">
													<span>${node.stargazerCount}</span>
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>
												</span>`
                    : ""
                }

								${
                  node.licenseInfo
                    ? `<span class="item"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"></path></svg>
										${node.licenseInfo.name}</span>`
                    : ""
                }

								<span class="item">${calculateRelativeDate(node.updatedAt)}
									</span>
								</div>
							</div>

							<div class="right__content">
								<button class="star">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>

									<span>Star</span>
								</button>
							</div>
						</div>`;

    repoTemplate.innerHTML = repoRowHtmlString;
    repoFragment.appendChild(repoTemplate.content.firstChild);
    repoContainer.appendChild(repoFragment);
  });
}

export function renderMisc(data) {
  const githubFooter = document.querySelector("#github-footer");
  const thumbnail = document.querySelector("#thumbnail");
  const navThumbnail = document.querySelector("#nav-thumbnail");
  const navUsername = document.querySelector("#nav-username");
  const totalRepoCount = document.querySelector("#repo-count");
  const tempThumbnail = document.querySelector("#temp-thumbnail");
  const tempUsername = document.querySelector("#temp-username");
  const signIn = document.querySelector("#sign-in");
  const statuses = document.querySelectorAll(".status");

  // render status info and emoji
  statuses.forEach((status) => {
    status.innerHTML = `${data.status.emojiHTML}
									<span class="status__text">${data.status.message}</span>`;
  });

  // username in settings dropdown
  signIn.textContent = data.login;

  // profile pic on navbar on desktop view
  thumbnail.src = data.avatarUrl;

  tempThumbnail.src = data.avatarUrl;
  tempUsername.textContent = data.login;

  // profile pic on mobile navbar
  navThumbnail.src = data.avatarUrl;

  // username on mobile navbar
  navUsername.textContent = data.login;

  // count of repos on tabs
  totalRepoCount.textContent = data.repositories.totalCount;

  // Page footer
  githubFooter.innerHTML += `${new Date().getFullYear()} GitHub, Inc`;
}
