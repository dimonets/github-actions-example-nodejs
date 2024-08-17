# github-actions-example-nodejs

### Build and Test Workflow (CI)
Following the guide: https://dev.to/olumidenwosu/implementing-continuous-integration-for-nodejs-apps-with-github-actions-1ag2

![Build and Test Workflow](https://github.com/dimonets/github-actions-example-nodejs/actions/workflows/build-and-test.yml/badge.svg)

### Deploy to AWS ECS Fargate Workflow (CD)
Following the guide: https://medium.com/@enelakuffo/deploying-a-node-js-application-to-aws-ecs-fargate-with-github-actions-8a350616b979

Note:
1. Make sure to setup actions repository secrets in GitHub project for AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY
2. Make sure security group has inboud rule to allow traffic on 8080 and outbound rule to allow traffic to 587 (for ECR access)
3. Make sure task execution role has correct policies:

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "ecr:GetAuthorizationToken",
                "ecr:BatchCheckLayerAvailability",
                "ecr:GetDownloadUrlForLayer",
                "ecr:BatchGetImage",
                "logs:CreateLogStream",
                "logs:PutLogEvents"
            ],
            "Resource": "*"
        }
    ]
}
```

Live URL: http://ip:8080/hello

![Deploy to AWS ECS Fargate Workflow](https://github.com/dimonets/github-actions-example-nodejs/actions/workflows/deploy-aws-ecs-fargate.yml/badge.svg)