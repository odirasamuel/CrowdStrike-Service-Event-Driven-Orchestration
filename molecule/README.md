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

# Molecule.yml
The provided YAML script seems to define a configuration for Molecule. Molecule is a tool used for the development and testing of Ansible roles. It helps you test Ansible roles across different environments and ensures that they function as expected. Let's interpret the given configuration:

1. **Dependency:**
   ```yaml
   dependency:
     name: galaxy
   ```
   This indicates that the dependencies for this role are managed by Ansible Galaxy.

2. **Driver:**
   ```yaml
   driver:
     name: ec2
   ```
   The test instances will be created on AWS EC2.

3. **Platforms:**
   ```yaml
   platforms:
     - name: instance
       ...
   ```
   It describes the instance to be created for testing. The instance uses a specific Amazon Machine Image (AMI) and is associated with a particular VPC subnet. The `priviledge: True` (which should probably be `privileged: True`) could mean that the instance requires elevated privileges, but it's a bit unclear without specific Molecule or EC2 documentation about this parameter.

4. **Provisioner:**
   ```yaml
   provisioner:
     name: ansible
     ...
   ```
   Ansible is used as the provisioner. The configuration also defines various options and playbooks to be used during the testing phases. The `stdout_callback: yaml` suggests that Ansible will print its output in YAML format.

5. **Verifier:**
   ```yaml
   verifier:
     name: ansible
     ...
   ```
   Ansible is also used as the verifier tool, which ensures that the role produces the expected results on the provisioned instances.

6. **Scenario:**
   ```yaml
   scenario:
     test_sequence:
       ...
   ```
   It defines the sequence of steps that Molecule will run when testing the Ansible role. The steps will be executed in the order listed. For example, it will handle dependencies first (`dependency`), then linting (`lint`), destroying any existing test instances (`destroy`), checking Ansible syntax (`syntax`), and so on.

   The `prepare` step is commented out, meaning it won't be executed during the test sequence.

In summary, this Molecule configuration is set up to test an Ansible role on an AWS EC2 instance, using specific playbooks for different stages of the test lifecycle. It ensures that the role is developed and functions correctly across the specified environment.