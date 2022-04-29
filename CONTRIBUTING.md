# MK Codecademy - Itinerary Builder - Contributing Guidelines

This itinerary builder is a collaborative project as part of the [Codecademy MK Chapter](https://community.codecademy.com/milton-keynes/). If you want to get involved in the project, feel free to come to one of our (virtual) meetings and join our [Discord](https://discord.gg/nzSQnqMj). 

Below are some guidelines on how we'd like you to contribute to keep things neat and tidy, and also to follow how a real development team might work. 

However, we appreciate that we are all here to learn, so don't worry too much about it if you forget to follow the guidelines at some point or make a mess - it's easily done when learning Git. 


## Tasks

All tasks are created as [Github Issues](https://github.com/MK-Codecademy/itinerary-app/issues) and assigned to the Main Project Board. We can then track the current status of all tasks and who is picking up what work. The project board can be found [here](https://github.com/MK-Codecademy/itinerary-app/projects/1). 

If you feel a new task needs doing, feel free to add one. Please add a clear description and if necessary, an image of designs. Please try to add some labels to indicate what kind of work it is (i.e. feature, bug, etc), and assign to the project board. This will automatically place it into the "Backlog" column, and if we're happy for that work to be done, we can move it into "To Do" where someone can pick it up and start working on it. 

When picking up a task, assign it to yourself, and move into the "In Progress" column when you get started. When the work is finished, link the issue to the pull request, and when this has been approved and merged, you can close the issue. This will automatically place it into the "Done" column for you. 

## Branches

There are two main branches in this project - `master` and `dev`. 

- `master` is intended to be the current representation of the live version of the app (when we get round to deploying it)
- `dev` is current development version of app, which you will branch off of

No work should be done in/pushed directly to neither the `master` nor `dev` branches. When you want to work on something, you will do so in a new branch, that has branched off of `dev`. An example of how that might go is below: 

```
git checkout dev // move into dev branch
git pull // get latest version of dev branch
git checkout -b feature/landing-page // create a new branch
// do some work
git add LandingPage.js // stage the changes
git commit -m "feat: create landing page" // commit changes with descriptive comment
git push --set-upstream origin feature/landing-page // push local branch to remote repo
// do some more work
git push // for following pushes you can use this command
```

After you're happy with the work, you will create a pull request to merge the work into `dev`. More can be found on this below.

If your work relates to a specific Github issue, you can also add the issue number to the branch name like so: `fix/51-broken-navbar` 

## Commits

Our advice is commit often. You'll never regret commiting minimal work, even if it seems unnecessary, but you may well regret doing lots of work without commiting, and then can't get back to a point when your code was working.

It would be great if you keep commit messages short and descriptive, and in the imperative (e.g. `change logo` instead of `I changed the logo`).

Prefixes are useful to help track what type of changes are being made. The main ones are:
- `feat: commit message` - adding or working on a feature
- `fix: commit message` - fixing a bug
- `chore: commit message` - code tidying or version updating
- `docs: commit message` - working on documentation
- `refactor: commit message` - refactoring code, but not adding a feature or fixing a bug

## Pull requests and merging

When your work in a current branch is complete, please don't merge it directly into the `dev` branch yourself. It is best practice to create a pull request and get someone else in the team to review before merging. 

`base: dev` - branch you want to merge into, should be `dev`
`compare: your-branch` - branch you are merging from, should be your branch
`reviewer` - required, but no rules on who it should be
`assignees` - best to assign yourself so you get notifications on updates
`projects` - leave blank to avoid duplicating tasks on the project board
`development` - link your Github issue (if there is one) so we know what the work relates to

In the body of the pull request, add a short description of the work you've done and any notes that would be useful for the review. For example, if you're unsure of the way you've done something and maybe want a second opinion, draw attention to it so the reviewer knows what to look out for. 
 
When the reviewer has finished reviewing and approved changes, either they or yourself can merge the changes into `dev` and delete the branch. 

If you're reviewing, feel free to pull the branch so you can test locally. Also, if you spot things that could be improved, please give helpful, friendly and constructive feedback so we can all grow and imrpove together. 

## Project structure

```
$ client
│   # Static files
├── public
│
├── src
│   ├── App.tsx
│   # Components
│   └── Components
│
│   # Misc.
├── package.json
├── README.md
└── tsconfig.json
```
