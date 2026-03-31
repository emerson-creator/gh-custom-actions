const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("@actions/exec");

function run() {
  // 1) Get some inputs values
  const bucketName = core.getInput("bucket", { required: true });
  const bucketRegion = core.getInput("bucket-region", { required: true });
  const distFolder = core.getInput("dist-folder", { required: true });

  // 2) Upload files

  exec.exec(
    `aws s3 sync ${distFolder} s3://${bucketName} --region ${bucketRegion} --delete`,
  );

  core.info("Deploying to S3 (JavaScript)...");
}

run();
