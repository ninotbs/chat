npm i

API_BASE=${API_BASE:-https://diaryapi.chat-app.com}

sed -i "s|^const apiBase = .*$|const apiBase = '$API_BASE'|" /src/index.js

exec "$@"