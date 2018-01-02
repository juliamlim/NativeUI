#! /bin/bash
welcons=("💖" "🔥" "🤘" "🌝" "🙌" "💯" "🐶" "🌟" "☄️" "🌶")
icon=${welcons[$RANDOM % ${#welcons[@]}]} 

echo YA $icon
npm publish
git add .
read message
git commit -m $message
git push
echo PUBLISHED 🎉