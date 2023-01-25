import os
import re
rootdir = './public'
check_dir = './public/assets/streamline-light'

white_list = []

for filename in os.listdir(rootdir):
    file_path = os.path.join(rootdir, filename)
    if os.path.isfile(file_path):
        with open(file_path) as f:
            try:
              x = re.findall(r'"(\.\/assets\/streamline-light[\/\w\-\s]*[\.]svg)"', f.read())
              if len(x):
                  white_list.extend(x)
print(white_list)

white_list = [os.path.abspath(os.path.join(rootdir, file)) for file in white_list]
white_list = list(dict.fromkeys(white_list))
print(white_list)
kept = []
for subdir, dirs, files in os.walk(check_dir):
    for file in files:
        path = os.path.join(subdir, file)
        path = os.path.abspath(path)
        if path not in white_list:
            os.remove(path)
        else:
            kept.append(path)

print("Kept " + str(len(kept)) + " from " + str(len(white_list)) + " used streamline icon assets.")

def removeEmptyFolders(path, removeRoot=True):
    if not os.path.isdir(path):
        return

    # remove empty subfolders
    files = os.listdir(path)
    if len(files):
        for f in files:
            fullpath = os.path.join(path, f)
            if os.path.isdir(fullpath):
                removeEmptyFolders(fullpath)

    # if folder empty, delete it
    files = os.listdir(path)
    if len(files) == 0 and removeRoot:
        os.rmdir(path)

removeEmptyFolders(check_dir)
