# fec
1. Add a feature in individual branch
2. Push to individual github branch
2. Make pull request to testing branch
3. Get a code review from 1 person
4. Merge testing and notify others to pull down
   updated testing branch

  If you're working in a specific file that multiple people will access,
then mark it in trello board that you're working on it to avoid
merge conflict.

If there is a merge conflict, and it's a small issue like the example
Jake said, just fix it and move on. Otherwise, talk to the developer
you conflicted with. If you can't decide between the two of you, call
in rest of team.


<br>
GIT COMMAND WORKFLOW

Create branch - <br>
`git checkout -b {branch-name}`

Switch branches - <br>
`git checkout {branch-name}`

Add code to commit - <br>
`git add {file-name}`<br>
or to add all changed files in current directory<br>
`git add .`

commit code (open VIM for commit message)-<br>
`git commit`<br>
or to add commit message in command-<br>
`git commit -m '{message}'`

push code to specified branch-<br>
`git push {remote [origin]} {branch-name}`

pull request on github
code review from peer

--pulled directions from atlassian--

merge main branch into your working branch-><br>
Preparing to merge
Before performing a merge there are a couple of preparation steps to take to ensure the merge goes smoothly.

Confirm the receiving branch
Execute `git status` to ensure that `HEAD` is pointing to the correct merge-receiving branch. If needed, execute `git checkout` to switch to the receiving branch. In our case we will execute `git checkout main`.

Fetch latest remote commits
Make sure the receiving branch and the merging branch are up-to-date with the latest remote changes. Execute `git fetch` to pull the latest remote commits. Once the fetch is completed ensure the main branch has the latest updates by executing `git pull`.

Merging
Once the previously discussed "preparing to merge" steps have been taken a merge can be initiated by executing `git merge {branch-name]` where `{branch-name}` is the name of the branch that will be merged into the receiving branch.

<br>
USE WITH CAUTION:

Delete branch - <br>
`git push origin --delete {branch}`

1. Search function that will search relevant questions when there are more then 3 characters in the search query

<img src="https://user-images.githubusercontent.com/97549146/208253414-56d9d9b8-24b2-4f82-9053-7d3d2f369aa1.gif" width="500" />


2. Load more questions and answers when button is clicked; auto scrolls down to the bottom of the newly loaded questions and answers

<img src="https://user-images.githubusercontent.com/97549146/208253810-f5365823-1d7d-4d18-98e1-1a577f1ddc87.gif" width="500" />


3. User cannot click helpful more than once on questions and answers

<img src="https://user-images.githubusercontent.com/97549146/208253901-33c6d47f-14b0-4c46-95a8-1a27608e75fb.gif" width="500" />


4. User can add questions. If there are invalid inputs in mandatory slots, it will show an error message

<img src="https://user-images.githubusercontent.com/97549146/208254065-fa60bf5f-813a-4c74-8e1f-ffea3b40fb3b.gif" width="500" />


5. User can add answers. If there are invalid inputs in mandatory slots, it will show an error message

<img src="https://user-images.githubusercontent.com/97549146/208254206-620b4caa-2d54-4db9-bcf4-7e3d804dd0f5.gif" width="500" />


6. Sellers can add answers. If an answer is made by seller, despite helpfulness, it will show up at the top of the answers list for that question.

<img src="https://user-images.githubusercontent.com/97549146/208254283-7a563e94-0bbd-4290-b06d-bcfc2f00f3ba.gif" width="500" />
