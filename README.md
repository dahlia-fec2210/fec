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

<br>
RELATED PRODUCTS

Users can toggle between light mode and dark mode:

<img src="https://user-images.githubusercontent.com/109521820/208253120-802c4d88-b518-4cfb-985e-7a0f69cf55cf.gif" width="600" />

Users can navigate through the related products carousel:

<img src="https://user-images.githubusercontent.com/109521820/208253635-6b2a2cfe-5a1e-44f8-bb02-f4eddb3c40b1.gif" width="600" />

Users can compare product features:

<img src="https://user-images.githubusercontent.com/109521820/208254116-bc1c5173-48d3-459e-9584-57e81c89ae6e.gif" width="600" />

Users can view all product photos through the related project card carousel:

<img src="https://user-images.githubusercontent.com/109521820/208256281-3d382b63-e846-452f-a73e-188a083d966e.gif" width="600" />

Users can add and remove products to their outfit list (data will persist on refresh):

<img src="https://user-images.githubusercontent.com/109521820/208256430-2ec59561-f6ee-4902-b494-c3e556324fde.gif" width="600" />

Users can view widget on any device:

<img src="https://user-images.githubusercontent.com/109521820/208256611-45f6e356-3bd2-42d3-b610-06ce61d5865e.gif" width="600" />
