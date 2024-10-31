# -*- coding: utf-8 -*-
import sys
import subprocess
from datetime import datetime

if sys.version_info.major < 3:
    input_func = raw_input
else:
    input_func = input


def write_log(new_tag):
    try:
      last_tag = subprocess.check_output('git describe --tags $(git rev-list --tags --max-count=1)', shell=True)
      last_tag = last_tag.strip().decode("utf-8")
      message = '{}..HEAD'.format(last_tag)
    except subprocess.CalledProcessError:
      message = 'HEAD'

    messages = subprocess.check_output(['git', 'log', message, '--format=%B'])

    inp = input_func("Enter a changelog message: ")

    changelog = open('CHANGELOG.md', 'a')
    today = datetime.now()
    today = today.strftime('%d-%m-%Y')

    changelog.write('\n')
    changelog.write('## [{}] - {}'.format(new_tag, today))
    changelog.write('\n')
    changelog.write('### {}'.format(inp))
    changelog.write('\n')

    for message in messages.splitlines():
        message = message.decode("utf-8")
        if message and not message.startswith(('WIP', 'Merge', 'Update changelog')):
            changelog.write('- {}'.format(message.encode('utf-8').decode("utf-8")))
            changelog.write('\n')

    changelog.close()


def commit_and_push(new_tag):
    input_func("Please finish editing CHANGELOG.md and press any key: ")

    subprocess.check_output(['git', 'add', '.'])
    subprocess.check_output(['git', 'commit', '-n', '-m', 'Update changelog'])

    subprocess.check_output(['git', 'tag', '-a', new_tag, '-m', 'Release {}'.format(new_tag)])
    subprocess.check_output(['git', 'push', 'origin', '--tags'])
    subprocess.check_output(['git', 'push'])

def main():
    branch = subprocess.check_output(['git', 'rev-parse', '--abbrev-ref', 'HEAD'])
    branch = branch.strip().decode("utf-8")

    new_tag = subprocess.check_output(['node', '-p', '-e', "require(\'./package.json\').version"])
    new_tag = 'v{}'.format(new_tag.decode("utf-8").strip())

    if branch != 'master':
        print('You must be working on master to generate change log')
        return

    write_log(new_tag)
    commit_and_push(new_tag)


if __name__ == '__main__':
    main()
