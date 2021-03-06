import sinon from 'sinon';
import createNode from '../../../src/createNode';
import createComponent from '../../../src/createComponent';
import { mountToDomSync, unmountFromDomSync } from '../../../src/client/mounter';

describe('onAttrsReceive', () => {
    let domNode;
    beforeEach(() => {
        document.body.appendChild(domNode = document.createElement('div'));
    });

    afterEach(() => {
        unmountFromDomSync(domNode);
        document.body.removeChild(domNode);
    });

    it('should be called when new attrs is passed', () => {
        const spy = sinon.spy(),
            C = createComponent({
                onRender() {
                    return createNode('div');
                },

                onAttrsReceive : spy
            }),
            oldAttrs = { id : 1 },
            newAttrs = { id : 2 };

        mountToDomSync(domNode, createNode(C).attrs(oldAttrs));
        mountToDomSync(domNode, createNode(C).attrs(newAttrs));

        expect(spy.called).to.be.ok();
        expect(spy.calledWith(newAttrs, oldAttrs)).to.be.ok();
    });

    it('shouldn\'t be called when no new attrs is passed', () => {
        const spy = sinon.spy(),
            C = createComponent({
                onRender() {
                    return createNode('div');
                },

                onAttrsReceive : spy
            });

        mountToDomSync(domNode, createNode(C));
        mountToDomSync(domNode, createNode(C));

        expect(spy.called).not.to.be.ok();
    });

    it('shouldn\'t add additional render if calls update()', done => {
        const spy = sinon.spy(),
            C = createComponent({
                onRender() {
                    spy.apply(this, arguments);
                    return createNode('div');
                },

                onAttrsReceive : function() {
                    this.update(() => {
                        expect(spy.calledTwice).to.be.ok();
                        done();
                    });
                }
            });

        mountToDomSync(domNode, createNode(C));
        mountToDomSync(domNode, createNode(C).attrs({}));
    });
});
