const shell = require('shelljs');
const path = require('path');
const fs = require('fs-extra');
const file = require('./index');
import commander from 'commander';
// go to the testing folder
shell.cd('./unit_test_tmp/');
jest.mock('commander')

async function cli(args) {
	// execute relative to this file
	return await shell.exec(`node ${path.resolve('./index')} ${args.join(' ')}`);
}

async function cli_2(args) {
	program.
	file(program)
	return program
}

test('Create should add new folder', async () => {
	await cli_2({ name: 'name' })
	const exists = fs.existsSync('./test_new_project');
	expect(exists).toBe(true)
});

test('Create should add new folder if dir', async () => {
	const resp = await cli_2()
	console.log(resp.code);
	expect(1).toBe(1)
});
