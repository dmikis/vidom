import createNode from '../../../src/createNode';
import patchOps from '../../../src/client/patchOps';

const node = createNode('a');

export default {
    'name' : 'removeText2',
    'trees' : [
        node.children(''),
        createNode('a')
    ],
    'patch' : []
}
