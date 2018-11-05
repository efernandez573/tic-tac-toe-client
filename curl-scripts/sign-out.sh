
#!/bin/bash

curl --include --request DELETE https://aqueous-atoll-85096.herokuapp.com/sign-out \
  --header "Authorization: Token token=${TOKEN}"
