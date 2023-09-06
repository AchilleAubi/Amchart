#!/bin/bash

echo "${FAILURE}"

BODY="[${GITHUB_REPOSITORY}]"
BRANCH="${BRANCH#refs/heads/}"
if [[ "${STATUS}" == "success" ]]; then
  MESSAGE=""
  BODY="The job '${GITHUB_JOB}' has passed"
  BODY="${BODY} \n STATUS: passed \n JOB: ${GITHUB_JOB} \n BRANCH: ${BRANCH} \n PROJECT: ${GITHUB_REPOSITORY}"
else
  MESSAGE="[X] "
  BODY="The job '${GITHUB_JOB}' has failed!!"
  BODY="${BODY} \n STATUS: failed \n JOB: ${GITHUB_JOB} \n BRANCH: ${BRANCH} \n PROJECT: ${GITHUB_REPOSITORY}"
fi


MESSAGE="${MESSAGE}[${BRANCH#refs/heads/}][${GITHUB_JOB}] $(echo "${COMMIT_MESSAGE}" | head -n 1)"


echo "${MESSAGE}"
echo "${BODY}"

curl -H 'Content-type: application/json' -X POST \
  "${SLACK_URL}" \
  -d "{\"text\":\"${MESSAGE}\", \"attachments\":[{\"text\":\"${BODY}\"}]}"