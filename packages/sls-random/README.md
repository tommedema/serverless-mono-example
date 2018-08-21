## Development

### Pre-requisites

1.  AWS credentials configured (see below)
2.  Node.js 8.10 (same as lambda)

### AWS credentials

Ensure that your `~/.aws/credentials` file has a access key id and secret with profile name `org-project-dev`:

```
[org-project-dev]
aws_access_key_id = XXXX
aws_secret_access_key = XXXX
```

Note that your user must have these [minimum privileges](https://github.com/serverless/serverless/issues/588#issuecomment-360780039). If you create resources liks 3 buckets, you'll also need privileges for that.

## Deployment

- `yarn run deploy --stage=dev --aws-profile=org-project-dev`

Change the `--aws-profile` flag to your liking, or set the AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY environment variables (e.g. for use in CI/CD).