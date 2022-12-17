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

<br><br><br>

RATINGS AND REVIEWS
<br><br>
When the user scrolls down the reviews section, they are met with the product breakdown on the left and the list of reviews for the current product on the right. 
<br>
<br>
When the user clicks the "More Reviews" section, two more reviews will display at the bottom of the list, and the list will automatically scroll down to show the user. 
<br><br>
MORE REVIEWS BUTTON & HELPFUL<br>
<img src="https://res.cloudinary.com/dqaynsuqp/image/upload/v1671294039/more-reviews-sort-by_dlrmb7.gif" width="600" />


<br>
The user can also sort the reviews by three categories: newest, relevance, and helpfulness. When one of those sort options are clicked, the list length persists in size, but sorts all the reviews by this sort option.
<br><br>
SORT BY DROPDOWN<br>
<img src="https://res.cloudinary.com/dqaynsuqp/image/upload/v1671294038/sort-by_xidjjg.gif" width="600" />

<br>
On the left, in the product breakdown, the user is greeted by the overall rating of the product, the rating breakdown, as well as the product characteristics breakdown. If the user clicks one of the star rating tags, then the reviews list will be sorted to display only reviews of the selected rating. The ratings filters are additive, and a "clear all filters" button will appear after 2 or more filters are selected.
<br><br>
STAR FILTERS<br>
<img src="https://res.cloudinary.com/dqaynsuqp/image/upload/v1671294038/filter-by-stars_qrghja.gif" width="600" />

<br>
When the "Add Review" button is selected, a modal will open with a form to fill out in order to submit a new review. When the text boxes are clicked, they will expand to allow user input, and persist with the text when the user clicks away. If the user does not enter text, the box will collapse back to its original state.
<br><br>
NAME INPUT<br>
<img src="https://res.cloudinary.com/dqaynsuqp/image/upload/v1671294046/Name-input_zf7lol.gif" width="600" />

<br>
When the user hovers over the overall rating selector, the stars fill in to match the user's mouse hover. If the user clicks a rating, the star filler will persist to match the rating -- except when hovering over another star rating. The user then will select their ratings for each characteristic of the current product. 
<br><br>
OVERALL RATING & TOGGLES<br>
<img src="https://res.cloudinary.com/dqaynsuqp/image/upload/v1671294039/Overall-and-toggles_g7xeih.gif" width="600" />

<br>
When the user is typing out their review body, they are met with a character count at the bottom. Once they have met the minimum requirement, the message will change to let them know, and no longer show them their count.
<br><br>
BODY INPUT<br>
<img src="https://res.cloudinary.com/dqaynsuqp/image/upload/v1671294042/body-input_pbnv9k.gif" width="600" />

<br>
Upon submission, their will be verification checks run in the background to assure that all required fields have been filled out properly. If any of the required fields have been left empty (or minimum requirements not met), the user will be prompted by an error message next to the submit button, telling them which fields need to be fixed.
<br><br>
SUBMIT VERIFICATION<br>
<img src="https://res.cloudinary.com/dqaynsuqp/image/upload/v1671294044/new-review-verification_rhvxrd.gif" width="600" />
