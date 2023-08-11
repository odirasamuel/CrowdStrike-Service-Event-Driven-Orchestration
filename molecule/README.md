[[_TOC_]]

# Purpose
A place to run molecule test the current role on real instances.

# Pre-requisites
- Python 3.6+
- ansible 2.9.6
- pywinrm 0.4.1
- boto3 1.13.18
- boto 2.49.0
- Environment variables
    - AWS_ACCESS_KEY_ID
    - AWS_SECRET_ACCESS_KEY

# Usage
Working Directory: ansible_role_crowdstrike

## Run full ephemeral test suite
`molecule test`

## Create
`molecule create`

## Run Role
`molecule converge`

## Run Test
`molecule verify`

## Destroy
`molecule destroy`

## Other test available
`molecule lint`
`molecule syntax`
`molecule idempotence`

# Test Cases to Run in Verify
1. Verify if Crowdstrike is installed

# Molecule Test Scenarios
  - lint
  - destroy
  - syntax
  - create
  - converge
  - idempotence
  - verify
  - destroy

## Modify the test.tfvars