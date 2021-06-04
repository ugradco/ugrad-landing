#!/bin/bash
set -e

AWS_S3_BUCKET_NAME="ugrad.co"
AWS_PROFILE_NAME="ugrad"
AWS_CLOUDFRONT_DISTRIBUTION_ID="E39IZW3AYRY5WN"

echo "Deploying vagon frontend to $1"
aws s3 cp --recursive --profile $AWS_PROFILE_NAME --acl public-read public/ s3://$AWS_S3_BUCKET_NAME/
echo "Deployed vagon frontend to $1"

echo "Creating Cloudfront invalidation..."
AWS_CLOUDFRONT_INVALIDATION_ID=$(aws cloudfront create-invalidation --distribution-id $AWS_CLOUDFRONT_DISTRIBUTION_ID --paths "/*" --profile $AWS_PROFILE_NAME | jq -r ".Invalidation.Id")
echo "Created Cloudfront Invalidation. You can query its status with the following command:"
echo "aws cloudfront get-invalidation --distribution-id $AWS_CLOUDFRONT_DISTRIBUTION_ID --id=$AWS_CLOUDFRONT_INVALIDATION_ID --profile $AWS_PROFILE_NAME"

