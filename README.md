# 🖥 FEC

## 🧾 Table of Contents
- [Git Workflow](#git-workflow)
- [FEC Project Overview & Demos](#project-overview--demos)
  - [Overview](#overview)
  - [Related Products & Outfit List](#related-products--outfit-list)
  - [Questions](#questions)
  - [Ratings and Reviews](#ratings-and-reviews)

## 👩‍💻 Git Workflow
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

### GIT COMMAND WORKFLOW

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

## 📽 Project Overview & Demos

<br>

### OVERVIEW

<br>

> The Overview section features the product information, description and images. The user can see the description and features of the product undeneath the images and the product details on the right.

> A user can use the two image carousels on the left to scroll the main image into view by clicking on any of the arrows or the image thumbnails. And by clicking on the displayed image, see an expanded view of it.

<img src="https://user-images.githubusercontent.com/87157356/208263052-082796d8-3794-4bb3-afce-18aadaedac97.gif" width="700" />

> Clicking on a style thumbnail will update the images and information for that particular style.

<img src="https://user-images.githubusercontent.com/87157356/208263290-79f31ec8-ace1-438e-8306-3343d63fa940.gif" width="700" />

> Under the style selector a user can select an available size for the selected product style and the quantity they wish to add to their cart. Attempting to add-to-cart without selecting a size will pop up a message instructing them to do so.

<img src="https://user-images.githubusercontent.com/87157356/208263498-e0d2f204-5da0-452a-9f32-860df9dcd921.gif" width="700" />

> A user can also share the product on social media by tweeting on Twitter, sharing on Facebook, or adding the product images to Pinterest.

<img src="https://user-images.githubusercontent.com/87157356/208263766-124d43f2-57f5-4ed9-8be9-c1e1c2071382.gif" width="700" />

<img src="https://user-images.githubusercontent.com/87157356/208263816-9519c82c-929b-40bc-97f1-23ed9cbe52aa.gif" width="700" />

> At the top of the product details is the average star rating (out of 5) of the product by other users and a link that scrolls the user's page down to the Reviews section.

<img src="https://user-images.githubusercontent.com/87157356/208263986-d01793e1-753d-4c11-88c0-18a08e66cedf.gif" width="700" />

> A user can also toggle the dark mode in the site header.

<img src="https://user-images.githubusercontent.com/87157356/208264105-50eba7b3-29d4-4595-9a16-81922b2533a9.gif" width="700" />

<br><br>

### RELATED PRODUCTS & OUTFIT LIST

<br>

When the user scrolls down to the related products section, they will see all products that are related to the current product shown in the overview section. Each related product card is clickable and will load the clicked product into the overview section.

Users can view this section in light or dark mode by clicking the toggle button in the top right corner.

<img src="https://user-images.githubusercontent.com/109521820/208253120-802c4d88-b518-4cfb-985e-7a0f69cf55cf.gif" width="600" />

When viewed on a desktop, only 4 related products will show at a time. Users can view more related products by using the right and left arrows on the related products carousel. The arrows will only show if there is a product available to scroll to.

<img src="https://user-images.githubusercontent.com/109521820/208253635-6b2a2cfe-5a1e-44f8-bb02-f4eddb3c40b1.gif" width="600" />

Users can view this widget on any device. The amount of related product cards visible with change depending on the size of the screen.

<img src="https://user-images.githubusercontent.com/109521820/208256611-45f6e356-3bd2-42d3-b610-06ce61d5865e.gif" width="600" />

To compare a related product with the current product shown in the overview section, users can click the star icon on a related product card. A modal will appear that compares product features.

<img src="https://user-images.githubusercontent.com/109521820/208254116-bc1c5173-48d3-459e-9584-57e81c89ae6e.gif" width="600" />

When hovering over the related product card, thumbnails of additional product photos will appear. Clicking on a thumbnail will change the main related product card photo. Right and left arrows will also appear and allow users to navigate through all available thumbnail photos for that product.

<img src="https://user-images.githubusercontent.com/109521820/208256281-3d382b63-e846-452f-a73e-188a083d966e.gif" width="600" />

Users can add products to their outfit list by clicking the plus icon on the 'add to outfit' card. Then, to remove a product from their outfit list, they can click the X icon on the product card they'd like to remove. User-specific outfit lists persist on refresh.

<img src="https://user-images.githubusercontent.com/109521820/208256430-2ec59561-f6ee-4902-b494-c3e556324fde.gif" width="600" />

<br><br>

### QUESTIONS

<br>

1. Search function that will search relevant questions when there are more then 3 characters in the search query

<img src="https://user-images.githubusercontent.com/97549146/208253414-56d9d9b8-24b2-4f82-9053-7d3d2f369aa1.gif" width="600" />


2. Load more questions and answers when button is clicked; auto scrolls down to the bottom of the newly loaded questions and answers

<img src="https://user-images.githubusercontent.com/97549146/208253810-f5365823-1d7d-4d18-98e1-1a577f1ddc87.gif" width="600" />


3. User cannot click helpful more than once on questions and answers

<img src="https://user-images.githubusercontent.com/97549146/208253901-33c6d47f-14b0-4c46-95a8-1a27608e75fb.gif" width="600" />


4. User can add questions. If there are invalid inputs in mandatory slots, it will show an error message

<img src="https://user-images.githubusercontent.com/97549146/208254065-fa60bf5f-813a-4c74-8e1f-ffea3b40fb3b.gif" width="600" />


5. User can add answers. If there are invalid inputs in mandatory slots, it will show an error message

<img src="https://user-images.githubusercontent.com/97549146/208254206-620b4caa-2d54-4db9-bcf4-7e3d804dd0f5.gif" width="600" />


6. Sellers can add answers. If an answer is made by seller, despite helpfulness, it will show up at the top of the answers list for that question.

<img src="https://user-images.githubusercontent.com/97549146/208254283-7a563e94-0bbd-4290-b06d-bcfc2f00f3ba.gif" width="600" />

<br><br>

### RATINGS AND REVIEWS
<br>
When the user scrolls down the reviews section, they are met with the product breakdown on the left and the list of reviews for the current product on the right. 
<br>
<br>
When the user clicks the "More Reviews" section, two more reviews will display at the bottom of the list, and the list will automatically scroll down to show the user. 
<br><br>
MORE REVIEWS BUTTON & HELPFUL<br>
<img src="http://g.recordit.co/qBGsmFn58L.gif" width="600" />


<br>
The user can also sort the reviews by three categories: newest, relevance, and helpfulness. When one of those sort options are clicked, the list length persists in size, but sorts all the reviews by this sort option.
<br><br>
SORT BY DROPDOWN<br>
<img src="http://g.recordit.co/zfV7cDHaVD.gif" width="600" />

<br>
On the left, in the product breakdown, the user is greeted by the overall rating of the product, the rating breakdown, as well as the product characteristics breakdown. If the user clicks one of the star rating tags, then the reviews list will be sorted to display only reviews of the selected rating. The ratings filters are additive, and a "clear all filters" button will appear after 2 or more filters are selected.
<br><br>
STAR FILTERS<br>
<img src="http://g.recordit.co/jH74ZObu2k.gif" width="600" />

<br>
When the "Add Review" button is selected, a modal will open with a form to fill out in order to submit a new review. When the text boxes are clicked, they will expand to allow user input, and persist with the text when the user clicks away. If the user does not enter text, the box will collapse back to its original state.
<br><br>
NAME INPUT<br>
<img src="http://g.recordit.co/44ufS41Uxd.gif" width="600" />

<br>
When the user hovers over the overall rating selector, the stars fill in to match the user's mouse hover. If the user clicks a rating, the star filler will persist to match the rating -- except when hovering over another star rating. The user then will select their ratings for each characteristic of the current product. 
<br><br>
OVERALL RATING & TOGGLES<br>
<img src="http://g.recordit.co/IjuDtdgmOQ.gif" width="600" />

<br>
When the user is typing out their review body, they are met with a character count at the bottom. Once they have met the minimum requirement, the message will change to let them know, and no longer show them their count.
<br><br>
BODY INPUT<br>
<img src="http://g.recordit.co/Mr3fKx5OCK.gif" width="600" />

<br>
Upon submission, their will be verification checks run in the background to assure that all required fields have been filled out properly. If any of the required fields have been left empty (or minimum requirements not met), the user will be prompted by an error message next to the submit button, telling them which fields need to be fixed.
<br><br>
SUBMIT VERIFICATION<br>
<img src="http://g.recordit.co/fIvEMiQelK.gif" width="600" />
