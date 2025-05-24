# Guide to Terminal
<hr>

## Navigation <br>
- ls : this lists all non hidden files and directories.
- ls -a : this lists all files and directories including hidden ones.

## Files <br>
- vi/vim  "file name" : this creates and opens files and what I mean by vi/vim is you can type there vi or vim its up to prefrence they do the same thing.
- rm "file name" : this removes files.
- mv "file name" "new file name" : this will rename the a file
- mv "file name" "directory name" : this will move a file to the directory to named. (if the directory you want to move the file to is not in the same directory of the file you wish to move you will need to tell it the path of where you want to move it)

## Directories <br>
- cd "directory name" : this opens directories.
- cd - : this opens the last openned directory.
- cd ~ : this takes you back to the home directory.
- mkdir "directory name" : this creates directories.
- rmdir "directory name" : this removes directories.
- mv "directory name" "new directory name/location" : this will rename a directory or move it. (if the directory you want to move the directory to is not in the same directory of the directory you wish to move you will need to tell it the path of where you want to move it)


## File Type <br>
- ."file name" : this is a hidden file.
- "file name".md : this makes a markdown file.

## Git <br>
- git add "file name" : this stages the files you want to upload to your git repository. (step 1)
- git commit -m "anything here" : this readies up the files you chose and names the commit. (step 2)
- git push : this uploads the files to your git repository. (step 3)
- git pull : this pulls files and directories from the git repository you are currently in and puts them onto your computer. (do not confuse this with downloading git repositories onto your computer)

## Tips <br>
**More will be added in the future**
- tab : this is your friend and also its auto complete.
### .vimrc
- Make a .vimrc file to customize your terminal too look how you want. <br>
**The following are suggestions for what to add to your .vimrc file**
1. syntax enable : this will make code change to different colors depending what they are like fuctions have a different color from numbers etc it just helps with decerning stuff and makes it more visully pleasing.
2. set background=dark : this turns your terminal to dark mode if you perfer it over the defualt light mode.

### .gitignore
- Make a .gitignore file in your repository so you can stop the creation of files that terminal makes so it doesn't clog up your git repository. <br>
**The following are suggestions for what to add to your .gitignore file**
1. .DS_Store
2. *.swp
3. __pycache__

