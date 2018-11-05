# #!/bin/bash

curl --include --request POST https://aqueous-atoll-85096.herokuapp.com/sign-up \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": elsiefern@ga.com",
      "password": "password",
      "password_confirmation": "password"
    }
  }'
