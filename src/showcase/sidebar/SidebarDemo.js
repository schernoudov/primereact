import React, {Component} from 'react';
import {Sidebar} from "../../components/sidebar/Sidebar";
import {Button} from '../../components/button/Button';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class SidebarDemo extends Component {

    constructor() {
        super();
        this.state = {
            visibleLeft: false,
            visibleRight: false,
            visibleTop:false,
            visibleBottom: false,
            visibleFullScreen: false,
            visibleCustomToolbar: false
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Sidebar</h1>
                        <p>Sidebar is a panel component displayed as an overlay.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("sidebar")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Sidebar visible={this.state.visibleLeft} baseZIndex={1000000} onHide={() => this.setState({visibleLeft: false})}>
                        <h1 style={{fontWeight:'normal'}}>Left Sidebar</h1>
                        <Button type="button" onClick={(e) => this.setState({visibleLeft: false})} label="Save" className="p-button-success" style={{marginRight:'.25em'}} />
                        <Button type="button" onClick={(e) => this.setState({visibleLeft: false})} label="Cancel" className="p-button-secondary"/>
                    </Sidebar>

                    <Sidebar visible={this.state.visibleRight} position="right" baseZIndex={1000000} onHide={() => this.setState({visibleRight: false})}>
                        <h1 style={{fontWeight:'normal'}}>Right Sidebar</h1>
                        <Button type="button" onClick={(e) => this.setState({visibleRight: false})} label="Save" className="p-button-success" style={{marginRight:'.25em'}} />
                        <Button type="button" onClick={(e) => this.setState({visibleRight: false})} label="Cancel" className="p-button-secondary"/>
                    </Sidebar>

                    <Sidebar visible={this.state.visibleTop} position="top" baseZIndex={1000000} onHide={() => this.setState({visibleTop: false})}>
                        <h1 style={{fontWeight:'normal'}}>Top Sidebar</h1>
                        <Button type="button" onClick={(e) => this.setState({visibleTop: false})} label="Save" className="p-button-success" style={{marginRight:'.25em'}} />
                        <Button type="button" onClick={(e) => this.setState({visibleTop: false})} label="Cancel" className="p-button-secondary"/>
                    </Sidebar>

                    <Sidebar visible={this.state.visibleBottom} position="bottom" baseZIndex={1000000} onHide={() => this.setState({visibleBottom: false})}>
                        <h1 style={{fontWeight:'normal'}}>Bottom Sidebar</h1>
                        <Button type="button" onClick={(e) => this.setState({visibleBottom: false})} label="Save" className="p-button-success" style={{marginRight:'.25em'}} />
                        <Button type="button" onClick={(e) => this.setState({visibleBottom: false})} label="Cancel" className="p-button-secondary"/>
                    </Sidebar>

                    <Sidebar visible={this.state.visibleFullScreen} fullScreen={true} baseZIndex={1000000} onHide={() => this.setState({visibleFullScreen: false})}>
                        <h1 style={{fontWeight:'normal'}}>Full Screen Sidebar</h1>
                        <Button type="button" onClick={(e) => this.setState({visibleFullScreen: false})} label="Save" className="p-button-success" style={{marginRight:'.25em'}} />
                        <Button type="button" onClick={(e) => this.setState({visibleFullScreen: false})} label="Cancel" className="p-button-secondary"/>
                    </Sidebar>

                    <Sidebar visible={this.state.visibleCustomToolbar} baseZIndex={1000000} onHide={() => this.setState({visibleCustomToolbar: false})} iconsTemplate={() => (
                        <React.Fragment>
                            <button className="p-sidebar-close p-link">
                                <span className="p-sidebar-close-icon pi pi-print"/>
                            </button>
                            <button className="p-sidebar-close p-link">
                                <span className="p-sidebar-close-icon pi pi-arrow-right"/>
                            </button>
                        </React.Fragment>
                    )}>
                        <h1 style={{fontWeight:'normal'}}>Sidebar with custom icons</h1>
                        <Button type="button" onClick={(e) => this.setState({visibleCustomToolbar: false})} label="Save" className="p-button-success" style={{marginRight:'.25em'}} />
                        <Button type="button" onClick={(e) => this.setState({visibleCustomToolbar: false})} label="Cancel" className="p-button-secondary"/>
                    </Sidebar>

                    <Button icon="pi pi-arrow-right" onClick={(e) => this.setState({visibleLeft:true})}  style={{marginRight:'.25em'}} />
                    <Button icon="pi pi-arrow-left" onClick={(e) => this.setState({visibleRight:true})}  style={{marginRight:'.25em'}} />
                    <Button icon="pi pi-arrow-down" onClick={(e) => this.setState({visibleTop:true})}  style={{marginRight:'.25em'}} />
                    <Button icon="pi pi-arrow-up" onClick={(e) => this.setState({visibleBottom:true})}  style={{marginRight:'.25em'}} />
                    <Button icon="pi pi-th-large" onClick={(e) => this.setState({visibleFullScreen:true})}  style={{marginRight:'.25em'}} />
                    <Button icon="pi pi-plus" onClick={(e) => this.setState({visibleCustomToolbar:true})} />
                </div>

                <SidebarDoc/>

            </div>
        )
    }
}

class SidebarDoc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };

        this.sources = {
            'app': {
                tabName: 'Source',
                content: `
import React, { Component } from 'react';
import {Sidebar} from "primereact/sidebar";
import {Button} from 'primereact/button';

export class SidebarDemo extends Component {

    constructor() {
        super();
        this.state = {
            visibleLeft: false,
            visibleRight: false,
            visibleTop:false,
            visibleBottom: false,
            visibleFullScreen: false,
            visibleCustomToolbar: false
        };
    }

    render() {
        return (
            <div>
                <Sidebar visible={this.state.visibleLeft} baseZIndex={1000000} onHide={() => this.setState({visibleLeft: false})}>
                    <h1 style={{fontWeight:'normal'}}>Left Sidebar</h1>
                    <Button type="button" onClick={(e) => this.setState({visibleLeft: false})} label="Save" className="p-button-success" style={{marginRight:'.25em'}} />
                    <Button type="button" onClick={(e) => this.setState({visibleLeft: false})} label="Cancel" className="p-button-secondary"/>
                </Sidebar>

                <Sidebar visible={this.state.visibleRight} position="right" baseZIndex={1000000} onHide={() => this.setState({visibleRight: false})}>
                    <h1 style={{fontWeight:'normal'}}>Right Sidebar</h1>
                    <Button type="button" onClick={(e) => this.setState({visibleRight: false})} label="Save" className="p-button-success" style={{marginRight:'.25em'}} />
                    <Button type="button" onClick={(e) => this.setState({visibleRight: false})} label="Cancel" className="p-button-secondary"/>
                </Sidebar>

                <Sidebar visible={this.state.visibleTop} position="top" baseZIndex={1000000} onHide={() => this.setState({visibleTop: false})}>
                    <h1 style={{fontWeight:'normal'}}>Top Sidebar</h1>
                    <Button type="button" onClick={(e) => this.setState({visibleTop: false})} label="Save" className="p-button-success" style={{marginRight:'.25em'}} />
                    <Button type="button" onClick={(e) => this.setState({visibleTop: false})} label="Cancel" className="p-button-secondary"/>
                </Sidebar>

                <Sidebar visible={this.state.visibleBottom} position="bottom" baseZIndex={1000000} onHide={() => this.setState({visibleBottom: false})}>
                    <h1 style={{fontWeight:'normal'}}>Bottom Sidebar</h1>
                    <Button type="button" onClick={(e) => this.setState({visibleBottom: false})} label="Save" className="p-button-success" style={{marginRight:'.25em'}} />
                    <Button type="button" onClick={(e) => this.setState({visibleBottom: false})} label="Cancel" className="p-button-secondary"/>
                </Sidebar>

                <Sidebar visible={this.state.visibleFullScreen} fullScreen={true} baseZIndex={1000000} onHide={() => this.setState({visibleFullScreen: false})}>
                    <h1 style={{fontWeight:'normal'}}>Full Screen Sidebar</h1>
                    <Button type="button" onClick={(e) => this.setState({visibleFullScreen: false})} label="Save" className="p-button-success" style={{marginRight:'.25em'}} />
                    <Button type="button" onClick={(e) => this.setState({visibleFullScreen: false})} label="Cancel" className="p-button-secondary"/>
                </Sidebar>

                <Sidebar visible={this.state.visibleCustomToolbar} baseZIndex={1000000} onHide={() => this.setState({visibleCustomToolbar: false})} iconsTemplate={() => (
                    <React.Fragment>
                        <button className="p-sidebar-close p-link">
                            <span className="p-sidebar-close-icon pi pi-print"/>
                        </button>
                        <button className="p-sidebar-close p-link">
                            <span className="p-sidebar-close-icon pi pi-arrow-right"/>
                        </button>
                    </React.Fragment>
                )}>
                    <h1 style={{fontWeight:'normal'}}>Sidebar with custom icons</h1>
                    <Button type="button" onClick={(e) => this.setState({visibleCustomToolbar: false})} label="Save" className="p-button-success" style={{marginRight:'.25em'}} />
                    <Button type="button" onClick={(e) => this.setState({visibleCustomToolbar: false})} label="Cancel" className="p-button-secondary"/>
                </Sidebar>

                <Button icon="pi pi-arrow-right" onClick={(e) => this.setState({visibleLeft:true})}  style={{marginRight:'.25em'}} />
                <Button icon="pi pi-arrow-left" onClick={(e) => this.setState({visibleRight:true})}  style={{marginRight:'.25em'}} />
                <Button icon="pi pi-arrow-down" onClick={(e) => this.setState({visibleTop:true})}  style={{marginRight:'.25em'}} />
                <Button icon="pi pi-arrow-up" onClick={(e) => this.setState({visibleBottom:true})}  style={{marginRight:'.25em'}} />
                <Button icon="pi pi-th-large" onClick={(e) => this.setState({visibleFullScreen:true})}  style={{marginRight:'.25em'}} />
                <Button icon="pi pi-plus" onClick={(e) => this.setState({visibleCustomToolbar:true})} />
            </div>
        )
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useState } from 'react';
import {Sidebar} from "primereact/sidebar";
import {Button} from 'primereact/button';

const SidebarDemo = () => {
    const [visibleLeft, setVisibleLeft] = useState(false);
    const [visibleRight, setVisibleRight] = useState(false);
    const [visibleTop, setVisibleTop] = useState(false);
    const [visibleBottom, setVisibleBottom] = useState(false);
    const [visibleFullScreen, setVisibleFullScreen] = useState(false);
    const [visibleCustomToolbar, setVisibleCustomToolbar] = useState(false);

    return (
        <div>
            <Sidebar visible={visibleLeft} baseZIndex={1000000} onHide={() => setVisibleLeft(false)}>
                <h1 style={{fontWeight:'normal'}}>Left Sidebar</h1>
                <Button type="button" onClick={(e) => setVisibleLeft(false)} label="Save" className="p-button-success" style={{marginRight:'.25em'}} />
                <Button type="button" onClick={(e) => setVisibleLeft(false)} label="Cancel" className="p-button-secondary"/>
            </Sidebar>

            <Sidebar visible={visibleRight} position="right" baseZIndex={1000000} onHide={() => setVisibleRight(false)}>
                <h1 style={{fontWeight:'normal'}}>Right Sidebar</h1>
                <Button type="button" onClick={(e) => setVisibleRight(false)} label="Save" className="p-button-success" style={{marginRight:'.25em'}} />
                <Button type="button" onClick={(e) => setVisibleRight(false)} label="Cancel" className="p-button-secondary"/>
            </Sidebar>

            <Sidebar visible={visibleTop} position="top" baseZIndex={1000000} onHide={() => setVisibleTop(false)}>
                <h1 style={{fontWeight:'normal'}}>Top Sidebar</h1>
                <Button type="button" onClick={(e) => setVisibleTop(false)} label="Save" className="p-button-success" style={{marginRight:'.25em'}} />
                <Button type="button" onClick={(e) => setVisibleTop(false)} label="Cancel" className="p-button-secondary"/>
            </Sidebar>

            <Sidebar visible={visibleBottom} position="bottom" baseZIndex={1000000} onHide={() => setVisibleBottom(false)}>
                <h1 style={{fontWeight:'normal'}}>Bottom Sidebar</h1>
                <Button type="button" onClick={(e) => setVisibleBottom(false)} label="Save" className="p-button-success" style={{marginRight:'.25em'}} />
                <Button type="button" onClick={(e) => setVisibleBottom(false)} label="Cancel" className="p-button-secondary"/>
            </Sidebar>

            <Sidebar visible={visibleFullScreen} fullScreen={true} baseZIndex={1000000} onHide={() => setVisibleFullScreen(false)}>
                <h1 style={{fontWeight:'normal'}}>Full Screen Sidebar</h1>
                <Button type="button" onClick={(e) => setVisibleFullScreen(false)} label="Save" className="p-button-success" style={{marginRight:'.25em'}} />
                <Button type="button" onClick={(e) => setVisibleFullScreen(false)} label="Cancel" className="p-button-secondary"/>
            </Sidebar>

            <Sidebar visible={visibleCustomToolbar} baseZIndex={1000000} onHide={() => setVisibleCustomToolbar(false)} iconsTemplate={() => (
                <React.Fragment>
                    <button className="p-sidebar-close p-link">
                        <span className="p-sidebar-close-icon pi pi-print"/>
                    </button>
                    <button className="p-sidebar-close p-link">
                        <span className="p-sidebar-close-icon pi pi-arrow-right"/>
                    </button>
                </React.Fragment>
            )}>
                <h1 style={{fontWeight:'normal'}}>Sidebar with custom icons</h1>
                <Button type="button" onClick={(e) => setVisibleCustomToolbar(false)} label="Save" className="p-button-success" style={{marginRight:'.25em'}} />
                <Button type="button" onClick={(e) => setVisibleCustomToolbar(false)} label="Cancel" className="p-button-secondary"/>
            </Sidebar>

            <Button icon="pi pi-arrow-right" onClick={(e) => setVisibleLeft(true)}  style={{marginRight:'.25em'}} />
            <Button icon="pi pi-arrow-left" onClick={(e) => setVisibleRight(true)}  style={{marginRight:'.25em'}} />
            <Button icon="pi pi-arrow-down" onClick={(e) => setVisibleTop(true)}  style={{marginRight:'.25em'}} />
            <Button icon="pi pi-arrow-up" onClick={(e) => setVisibleBottom(true)}  style={{marginRight:'.25em'}} />
            <Button icon="pi pi-th-large" onClick={(e) => setVisibleFullScreen(true)}  style={{marginRight:'.25em'}} />
            <Button icon="pi pi-plus" onClick={(e) => setVisibleCustomToolbar(true)} />
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState } from 'react';
import {Sidebar} from "primereact/sidebar";
import {Button} from 'primereact/button';

const SidebarDemo = () => {
    const [visibleLeft, setVisibleLeft] = useState(false);
    const [visibleRight, setVisibleRight] = useState(false);
    const [visibleTop, setVisibleTop] = useState(false);
    const [visibleBottom, setVisibleBottom] = useState(false);
    const [visibleFullScreen, setVisibleFullScreen] = useState(false);
    const [visibleCustomToolbar, setVisibleCustomToolbar] = useState(false);

    return (
        <div>
            <Sidebar visible={visibleLeft} baseZIndex={1000000} onHide={() => setVisibleLeft(false)}>
                <h1 style={{fontWeight:'normal'}}>Left Sidebar</h1>
                <Button type="button" onClick={(e) => setVisibleLeft(false)} label="Save" className="p-button-success" style={{marginRight:'.25em'}} />
                <Button type="button" onClick={(e) => setVisibleLeft(false)} label="Cancel" className="p-button-secondary"/>
            </Sidebar>

            <Sidebar visible={visibleRight} position="right" baseZIndex={1000000} onHide={() => setVisibleRight(false)}>
                <h1 style={{fontWeight:'normal'}}>Right Sidebar</h1>
                <Button type="button" onClick={(e) => setVisibleRight(false)} label="Save" className="p-button-success" style={{marginRight:'.25em'}} />
                <Button type="button" onClick={(e) => setVisibleRight(false)} label="Cancel" className="p-button-secondary"/>
            </Sidebar>

            <Sidebar visible={visibleTop} position="top" baseZIndex={1000000} onHide={() => setVisibleTop(false)}>
                <h1 style={{fontWeight:'normal'}}>Top Sidebar</h1>
                <Button type="button" onClick={(e) => setVisibleTop(false)} label="Save" className="p-button-success" style={{marginRight:'.25em'}} />
                <Button type="button" onClick={(e) => setVisibleTop(false)} label="Cancel" className="p-button-secondary"/>
            </Sidebar>

            <Sidebar visible={visibleBottom} position="bottom" baseZIndex={1000000} onHide={() => setVisibleBottom(false)}>
                <h1 style={{fontWeight:'normal'}}>Bottom Sidebar</h1>
                <Button type="button" onClick={(e) => setVisibleBottom(false)} label="Save" className="p-button-success" style={{marginRight:'.25em'}} />
                <Button type="button" onClick={(e) => setVisibleBottom(false)} label="Cancel" className="p-button-secondary"/>
            </Sidebar>

            <Sidebar visible={visibleFullScreen} fullScreen={true} baseZIndex={1000000} onHide={() => setVisibleFullScreen(false)}>
                <h1 style={{fontWeight:'normal'}}>Full Screen Sidebar</h1>
                <Button type="button" onClick={(e) => setVisibleFullScreen(false)} label="Save" className="p-button-success" style={{marginRight:'.25em'}} />
                <Button type="button" onClick={(e) => setVisibleFullScreen(false)} label="Cancel" className="p-button-secondary"/>
            </Sidebar>

            <Sidebar visible={visibleCustomToolbar} baseZIndex={1000000} onHide={() => setVisibleCustomToolbar(false)} iconsTemplate={() => (
                <React.Fragment>
                    <button className="p-sidebar-close p-link">
                        <span className="p-sidebar-close-icon pi pi-print"/>
                    </button>
                    <button className="p-sidebar-close p-link">
                        <span className="p-sidebar-close-icon pi pi-arrow-right"/>
                    </button>
                </React.Fragment>
            )}>
                <h1 style={{fontWeight:'normal'}}>Sidebar with custom icons</h1>
                <Button type="button" onClick={(e) => setVisibleCustomToolbar(false)} label="Save" className="p-button-success" style={{marginRight:'.25em'}} />
                <Button type="button" onClick={(e) => setVisibleCustomToolbar(false)} label="Cancel" className="p-button-secondary"/>
            </Sidebar>

            <Button icon="pi pi-arrow-right" onClick={(e) => setVisibleLeft(true)}  style={{marginRight:'.25em'}} />
            <Button icon="pi pi-arrow-left" onClick={(e) => setVisibleRight(true)}  style={{marginRight:'.25em'}} />
            <Button icon="pi pi-arrow-down" onClick={(e) => setVisibleTop(true)}  style={{marginRight:'.25em'}} />
            <Button icon="pi pi-arrow-up" onClick={(e) => setVisibleBottom(true)}  style={{marginRight:'.25em'}} />
            <Button icon="pi pi-th-large" onClick={(e) => setVisibleFullScreen(true)}  style={{marginRight:'.25em'}} />
            <Button icon="pi pi-plus" onClick={(e) => setVisibleCustomToolbar(true)} />
        </div>
    )
}
                `
            }
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.activeIndex !== nextState.activeIndex) {
            return true;
        }

        return false;
    }

    renderSourceButtons() {
        return (
            <div className="source-button-group">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/sidebar" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="SidebarDemo" sources={this.sources} activeButtonIndex={this.state.activeIndex - 1} />
            </div>
        )
    }

    render() {
        const sourceButtons = this.renderSourceButtons();

        return (
            <div className="content-section documentation">
                <TabView activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })}>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
                        <CodeHighlight className="language-javascript">
                            {`
import {Sidebar} from 'primereact/sidebar';

`}
                        </CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>Sidebar is used as a container and visibility is controlled with <i>visible</i> property.</p>

                        <CodeHighlight className="language-jsx">
                            {`
<Sidebar visible={this.state.visible} onHide={() => this.setState({visible:false})}>
    Content
</Sidebar>

<Button icon="pi pi-arrow-right" onClick={(e) => this.setState({visible:true})}/>

`}
                        </CodeHighlight>

                        <h3>Position</h3>
                        <p>Sidebar can either be located on the left (default), right, top or bottom of the screen depending on the <i>position</i> property.</p>

                        <CodeHighlight className="language-jsx">
                            {`
<Sidebar visible={this.state.visible} position="right" onHide={() => this.setState({visible:false})}>
    Content
</Sidebar>

`}
                        </CodeHighlight>

                        <h3>Size</h3>
                        <p>Sidebar size can be changed using a fixed value or using one of the three predefined ones.</p>
                        <CodeHighlight className="language-jsx">
                            {`
<Sidebar visible={this.state.visible} position="right" className="ui-sidebar-sm" onHide={() => this.setState({visible:false})}</Sidebar>
<Sidebar visible={this.state.visible} position="right" className="ui-sidebar-md" onHide={() => this.setState({visible:false})}></Sidebar>
<Sidebar visible={this.state.visible} position="right" className="ui-sidebar-lg" onHide={() => this.setState({visible:false})}></Sidebar>
<Sidebar visible={this.state.visible} position="right" style={{width:'30em'}} onHide={() => this.setState({visible:false})}></Sidebar>

`}
                        </CodeHighlight>

                        <h3>Full Screen</h3>
                        <p>Full screen mode allows the sidebar to cover whole screen.</p>
                        <CodeHighlight className="language-jsx">
                            {`
<Sidebar visible={this.state.visible} fullScreen={true} onHide={() => this.setState({visible:false})}>
    Content
</Sidebar>

`}
                        </CodeHighlight>

                        <h3>Custom toolbar</h3>
                        <p>Additional content can be provided using the <i>iconsTemplate</i> property.</p>

                        <CodeHighlight className="language-jsx">
                            {`
<Sidebar visible={this.state.visibleCustomToolbar} onHide={() => this.setState({visibleCustomToolbar: false})} iconsTemplate={() => (
    <React.Fragment>
        <button className="p-sidebar-close p-link">
            <span className="p-sidebar-close-icon pi pi-print"/>
        </button>
        <button className="p-sidebar-close p-link">
            <span className="p-sidebar-close-icon pi pi-arrow-right"/>
        </button>
    </React.Fragment>
)}>
    <h1 style={{fontWeight:'normal'}}>Sidebar with custom icons</h1>
    <Button type="button" onClick={(e) => this.setState({visibleCustomToolbar: false})} label="Save" className="p-button-success" style={{marginRight:'.25em'}} />
    <Button type="button" onClick={(e) => this.setState({visibleCustomToolbar: false})} label="Cancel" className="p-button-secondary"/>
</Sidebar>

`}
                        </CodeHighlight>

                        <h3>Properties</h3>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Default</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>id</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Unique identifier of the element.</td>
                                    </tr>
                                    <tr>
                                        <td>style</td>
                                        <td>object</td>
                                        <td>null</td>
                                        <td>Inline style of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>className</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>visible</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>Specifies the visibility of the dialog.</td>
                                    </tr>
                                    <tr>
                                        <td>position</td>
                                        <td>string</td>
                                        <td>left</td>
                                        <td>Specifies the position of the sidebar, valid values are "left" and "right".</td>
                                    </tr>
                                    <tr>
                                        <td>fullScreen</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>Adds a close icon to the header to hide the dialog.</td>
                                    </tr>
                                    <tr>
                                        <td>blockScroll</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>Whether to block scrolling of the document when sidebar is active.</td>
                                    </tr>
                                    <tr>
                                        <td>baseZIndex</td>
                                        <td>number</td>
                                        <td>0</td>
                                        <td>Base zIndex value to use in layering.</td>
                                    </tr>
                                    <tr>
                                        <td>dismissable</td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>Whether clicking outside closes the panel.</td>
                                    </tr>
                                    <tr>
                                        <td>showCloseIcon</td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>Whether to display a close icon inside the panel.</td>
                                    </tr>
                                    <tr>
                                        <td>ariaCloseLabel</td>
                                        <td>string</td>
                                        <td>close</td>
                                        <td>Aria label of the close icon.</td>
                                    </tr>
                                    <tr>
                                        <td>iconsTemplate</td>
                                        <td>Element</td>
                                        <td>null</td>
                                        <td>Custom icons template for the header.</td>
                                    </tr>
                                    <tr>
                                        <td>modal</td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>Whether to a modal layer behind the sidebar.</td>
                                    </tr>
                                    <tr>
                                        <td>closeOnEscape</td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>Specifices if pressing escape key should hide the sidebar.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Events</h3>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Parameters</th>
                                    <th>Description</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>onHide</td>
                                        <td>-</td>
                                        <td>Callback to invoke when sidebar gets hidden.</td>
                                    </tr>
                                    <tr>
                                        <td>onShow</td>
                                        <td>-</td>
                                        <td>Callback to invoke when sidebar gets shown.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Styling</h3>
                        <p>Following is the list of structural style classes.</p>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Element</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>p-sidebar</td>
                                        <td>Container element</td>
                                    </tr>
                                    <tr>
                                        <td>p-sidebar-left</td>
                                        <td>Container element of left sidebar.</td>
                                    </tr>
                                    <tr>
                                        <td>p-sidebar-right</td>
                                        <td>Container element of right sidebar.</td>
                                    </tr>
                                    <tr>
                                        <td>p-sidebar-top</td>
                                        <td>Container element of top sidebar.</td>
                                    </tr>
                                    <tr>
                                        <td>p-sidebar-bottom</td>
                                        <td>Container element of bottom sidebar.</td>
                                    </tr>
                                    <tr>
                                        <td>p-sidebar-full</td>
                                        <td>Container element of a full screen sidebar.</td>
                                    </tr>
                                    <tr>
                                        <td>p-sidebar-active</td>
                                        <td>Container element when sidebar is visible.</td>
                                    </tr>
                                    <tr>
                                        <td>p-sidebar-close</td>
                                        <td>Close anchor element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-sidebar-sm</td>
                                        <td>Small sized sidebar.</td>
                                    </tr>
                                    <tr>
                                        <td>p-sidebar-md</td>
                                        <td>Medium sized sidebar.</td>
                                    </tr>
                                    <tr>
                                        <td>p-sidebar-lg</td>
                                        <td>Large sized sidebar.</td>
                                    </tr>
                                    <tr>
                                        <td>p-sidebar-mask</td>
                                        <td>Modal layer of the sidebar.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Dependencies</h3>
                        <p>None.</p>
                    </TabPanel>

                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName}>
                                    {sourceButtons}

                                    <CodeHighlight className="language-javascript">
                                        {value.content}
                                    </CodeHighlight>
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }
}
