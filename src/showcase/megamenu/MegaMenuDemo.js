import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {MegaMenu} from '../../components/megamenu/MegaMenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class MegaMenuDemo extends Component {

    render() {
        const items = [
            {
                label: 'Videos', icon: 'pi pi-fw pi-video',
                items: [
                    [
                        {
                            label: 'Video 1',
                            items: [{label: 'Video 1.1'}, {label: 'Video 1.2'}]
                        },
                        {
                            label: 'Video 2',
                            items: [{label: 'Video 2.1'}, {label: 'Video 2.2'}]
                        }
                    ],
                    [
                        {
                            label: 'Video 3',
                            items: [{label: 'Video 3.1'}, {label: 'Video 3.2'}]
                        },
                        {
                            label: 'Video 4',
                            items: [{label: 'Video 4.1'}, {label: 'Video 4.2'}]
                        }
                    ]
                ]
            },
            {
                label: 'Users', icon: 'pi pi-fw pi-users',
                items: [
                    [
                        {
                            label: 'User 1',
                            items: [{label: 'User 1.1'}, {label: 'User 1.2'}]
                        },
                        {
                            label: 'User 2',
                            items: [{label: 'User 2.1'}, {label: 'User 2.2'}]
                        },
                    ],
                    [
                        {
                            label: 'User 3',
                            items: [{label: 'User 3.1'}, {label: 'User 3.2'}]
                        },
                        {
                            label: 'User 4',
                            items: [{label: 'User 4.1'}, {label: 'User 4.2'}]
                        }
                    ],
                    [
                        {
                            label: 'User 5',
                            items: [{label: 'User 5.1'}, {label: 'User 5.2'}]
                        },
                        {
                            label: 'User 6',
                            items: [{label: 'User 6.1'}, {label: 'User 6.2'}]
                        }
                    ]
                ]
            },
            {
                label: 'Events', icon: 'pi pi-fw pi-calendar',
                items: [
                    [
                        {
                            label: 'Event 1',
                            items: [{label: 'Event 1.1'}, {label: 'Event 1.2'}]
                        },
                        {
                            label: 'Event 2',
                            items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}]
                        }
                    ],
                    [
                        {
                            label: 'Event 3',
                            items: [{label: 'Event 3.1'}, {label: 'Event 3.2'}]
                        },
                        {
                            label: 'Event 4',
                            items: [{label: 'Event 4.1'}, {label: 'Event 4.2'}]
                        }
                    ]
                ]
            },
            {
                label: 'Settings', icon: 'pi pi-fw pi-cog',
                items: [
                    [
                        {
                            label: 'Setting 1',
                            items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]
                        },
                        {
                            label: 'Setting 2',
                            items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}]
                        },
                        {
                            label: 'Setting 3',
                            items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}]
                        }
                    ],
                    [
                        {
                            label: 'Technology 4',
                            items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]
                        }
                    ]
                ]
            }
        ];

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>MegaMenu</h1>
                        <p>MegaMenu is navigation component that displays submenus together.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("megaMenu")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Horizontal</h3>
                    <MegaMenu model={items}/>

                    <h3>Vertical</h3>
                    <MegaMenu model={items} orientation="vertical"/>
                </div>

                <MegaMenuDoc/>
            </div>
        );
    }
}

class MegaMenuDoc extends Component {

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
import {MegaMenu} from 'primereact/megamenu';

export class MegaMenuDemo extends Component {

    render() {
        const items = [
            {
                label: 'Videos', icon: 'pi pi-fw pi-video',
                items: [
                    [
                        {
                            label: 'Video 1',
                            items: [{label: 'Video 1.1'}, {label: 'Video 1.2'}]
                        },
                        {
                            label: 'Video 2',
                            items: [{label: 'Video 2.1'}, {label: 'Video 2.2'}]
                        }
                    ],
                    [
                        {
                            label: 'Video 3',
                            items: [{label: 'Video 3.1'}, {label: 'Video 3.2'}]
                        },
                        {
                            label: 'Video 4',
                            items: [{label: 'Video 4.1'}, {label: 'Video 4.2'}]
                        }
                    ]
                ]
            },
            {
                label: 'Users', icon: 'pi pi-fw pi-users',
                items: [
                    [
                        {
                            label: 'User 1',
                            items: [{label: 'User 1.1'}, {label: 'User 1.2'}]
                        },
                        {
                            label: 'User 2',
                            items: [{label: 'User 2.1'}, {label: 'User 2.2'}]
                        },
                    ],
                    [
                        {
                            label: 'User 3',
                            items: [{label: 'User 3.1'}, {label: 'User 3.2'}]
                        },
                        {
                            label: 'User 4',
                            items: [{label: 'User 4.1'}, {label: 'User 4.2'}]
                        }
                    ],
                    [
                        {
                            label: 'User 5',
                            items: [{label: 'User 5.1'}, {label: 'User 5.2'}]
                        },
                        {
                            label: 'User 6',
                            items: [{label: 'User 6.1'}, {label: 'User 6.2'}]
                        }
                    ]
                ]
            },
            {
                label: 'Events', icon: 'pi pi-fw pi-calendar',
                items: [
                    [
                        {
                            label: 'Event 1',
                            items: [{label: 'Event 1.1'}, {label: 'Event 1.2'}]
                        },
                        {
                            label: 'Event 2',
                            items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}]
                        }
                    ],
                    [
                        {
                            label: 'Event 3',
                            items: [{label: 'Event 3.1'}, {label: 'Event 3.2'}]
                        },
                        {
                            label: 'Event 4',
                            items: [{label: 'Event 4.1'}, {label: 'Event 4.2'}]
                        }
                    ]
                ]
            },
            {
                label: 'Settings', icon: 'pi pi-fw pi-cog',
                items: [
                    [
                        {
                            label: 'Setting 1',
                            items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]
                        },
                        {
                            label: 'Setting 2',
                            items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}]
                        },
                        {
                            label: 'Setting 3',
                            items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}]
                        }
                    ],
                    [
                        {
                            label: 'Technology 4',
                            items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]
                        }
                    ]
                ]
            }
        ];

        return (
            <div>
                <h3>Horizontal</h3>
                <MegaMenu model={items}/>

                <h3>Vertical</h3>
                <MegaMenu model={items} orientation="vertical"/>
            </div>
        );
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React from 'react';
import {MegaMenu} from 'primereact/megamenu';

const MegaMenuDemo = () => {

    const items = [
        {
            label: 'Videos', icon: 'pi pi-fw pi-video',
            items: [
                [
                    {
                        label: 'Video 1',
                        items: [{label: 'Video 1.1'}, {label: 'Video 1.2'}]
                    },
                    {
                        label: 'Video 2',
                        items: [{label: 'Video 2.1'}, {label: 'Video 2.2'}]
                    }
                ],
                [
                    {
                        label: 'Video 3',
                        items: [{label: 'Video 3.1'}, {label: 'Video 3.2'}]
                    },
                    {
                        label: 'Video 4',
                        items: [{label: 'Video 4.1'}, {label: 'Video 4.2'}]
                    }
                ]
            ]
        },
        {
            label: 'Users', icon: 'pi pi-fw pi-users',
            items: [
                [
                    {
                        label: 'User 1',
                        items: [{label: 'User 1.1'}, {label: 'User 1.2'}]
                    },
                    {
                        label: 'User 2',
                        items: [{label: 'User 2.1'}, {label: 'User 2.2'}]
                    },
                ],
                [
                    {
                        label: 'User 3',
                        items: [{label: 'User 3.1'}, {label: 'User 3.2'}]
                    },
                    {
                        label: 'User 4',
                        items: [{label: 'User 4.1'}, {label: 'User 4.2'}]
                    }
                ],
                [
                    {
                        label: 'User 5',
                        items: [{label: 'User 5.1'}, {label: 'User 5.2'}]
                    },
                    {
                        label: 'User 6',
                        items: [{label: 'User 6.1'}, {label: 'User 6.2'}]
                    }
                ]
            ]
        },
        {
            label: 'Events', icon: 'pi pi-fw pi-calendar',
            items: [
                [
                    {
                        label: 'Event 1',
                        items: [{label: 'Event 1.1'}, {label: 'Event 1.2'}]
                    },
                    {
                        label: 'Event 2',
                        items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}]
                    }
                ],
                [
                    {
                        label: 'Event 3',
                        items: [{label: 'Event 3.1'}, {label: 'Event 3.2'}]
                    },
                    {
                        label: 'Event 4',
                        items: [{label: 'Event 4.1'}, {label: 'Event 4.2'}]
                    }
                ]
            ]
        },
        {
            label: 'Settings', icon: 'pi pi-fw pi-cog',
            items: [
                [
                    {
                        label: 'Setting 1',
                        items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]
                    },
                    {
                        label: 'Setting 2',
                        items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}]
                    },
                    {
                        label: 'Setting 3',
                        items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}]
                    }
                ],
                [
                    {
                        label: 'Technology 4',
                        items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]
                    }
                ]
            ]
        }
    ];

    return (
        <div>
            <h3>Horizontal</h3>
            <MegaMenu model={items}/>

            <h3>Vertical</h3>
            <MegaMenu model={items} orientation="vertical"/>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React from 'react';
import {MegaMenu} from 'primereact/megamenu';

const MegaMenuDemo = () => {

    const items = [
        {
            label: 'Videos', icon: 'pi pi-fw pi-video',
            items: [
                [
                    {
                        label: 'Video 1',
                        items: [{label: 'Video 1.1'}, {label: 'Video 1.2'}]
                    },
                    {
                        label: 'Video 2',
                        items: [{label: 'Video 2.1'}, {label: 'Video 2.2'}]
                    }
                ],
                [
                    {
                        label: 'Video 3',
                        items: [{label: 'Video 3.1'}, {label: 'Video 3.2'}]
                    },
                    {
                        label: 'Video 4',
                        items: [{label: 'Video 4.1'}, {label: 'Video 4.2'}]
                    }
                ]
            ]
        },
        {
            label: 'Users', icon: 'pi pi-fw pi-users',
            items: [
                [
                    {
                        label: 'User 1',
                        items: [{label: 'User 1.1'}, {label: 'User 1.2'}]
                    },
                    {
                        label: 'User 2',
                        items: [{label: 'User 2.1'}, {label: 'User 2.2'}]
                    },
                ],
                [
                    {
                        label: 'User 3',
                        items: [{label: 'User 3.1'}, {label: 'User 3.2'}]
                    },
                    {
                        label: 'User 4',
                        items: [{label: 'User 4.1'}, {label: 'User 4.2'}]
                    }
                ],
                [
                    {
                        label: 'User 5',
                        items: [{label: 'User 5.1'}, {label: 'User 5.2'}]
                    },
                    {
                        label: 'User 6',
                        items: [{label: 'User 6.1'}, {label: 'User 6.2'}]
                    }
                ]
            ]
        },
        {
            label: 'Events', icon: 'pi pi-fw pi-calendar',
            items: [
                [
                    {
                        label: 'Event 1',
                        items: [{label: 'Event 1.1'}, {label: 'Event 1.2'}]
                    },
                    {
                        label: 'Event 2',
                        items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}]
                    }
                ],
                [
                    {
                        label: 'Event 3',
                        items: [{label: 'Event 3.1'}, {label: 'Event 3.2'}]
                    },
                    {
                        label: 'Event 4',
                        items: [{label: 'Event 4.1'}, {label: 'Event 4.2'}]
                    }
                ]
            ]
        },
        {
            label: 'Settings', icon: 'pi pi-fw pi-cog',
            items: [
                [
                    {
                        label: 'Setting 1',
                        items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]
                    },
                    {
                        label: 'Setting 2',
                        items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}]
                    },
                    {
                        label: 'Setting 3',
                        items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}]
                    }
                ],
                [
                    {
                        label: 'Technology 4',
                        items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]
                    }
                ]
            ]
        }
    ];

    return (
        <div>
            <h3>Horizontal</h3>
            <MegaMenu model={items}/>

            <h3>Vertical</h3>
            <MegaMenu model={items} orientation="vertical"/>
        </div>
    );
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
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/megamenu" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="MegaMenuDemo" sources={this.sources} activeButtonIndex={this.state.activeIndex - 1} />
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
import {MegaMenu} from 'primereact/megamenu';

`}</CodeHighlight>

                        <h3>MenuItem API</h3>
                        <p>MegaMenu uses the common menu item api to define its items, visit <Link to="/menumodel">  MenuModel </Link> for details.</p>

                        <h3>Getting Started</h3>
                        <p>Layout of the MegaMenu is managed by the <a href="https://github.com/primefaces/primeflex">PrimeFlex</a> that can be downloaded from npm.</p>

<CodeHighlight className="language-javascript">
{`
npm install primeflex --save

`}
</CodeHighlight>

                        <p>MegaMenu requires a collection of menuitems as its model.</p>

                        <CodeHighlight className="language-javascript">
                            {`
const items: [
    {
        label: 'Videos', icon: 'pi pi-fw pi-video',
        items: [
            [
                {
                    label: 'Video 1',
                    items: [{label: 'Video 1.1'}, {label: 'Video 1.2'}]
                },
                {
                    label: 'Video 2',
                    items: [{label: 'Video 2.1'}, {label: 'Video 2.2'}]
                }
            ],
            [
                {
                    label: 'Video 3',
                    items: [{label: 'Video 3.1'}, {label: 'Video 3.2'}]
                },
                {
                    label: 'Video 4',
                    items: [{label: 'Video 4.1'}, {label: 'Video 4.2'}]
                }
            ]
        ]
    },
    {
        label: 'Users', icon: 'pi pi-fw pi-users',
        items: [
            [
                {
                    label: 'User 1',
                    items: [{label: 'User 1.1'}, {label: 'User 1.2'}]
                },
                {
                    label: 'User 2',
                    items: [{label: 'User 2.1'}, {label: 'User 2.2'}]
                },
            ],
            [
                {
                    label: 'User 3',
                    items: [{label: 'User 3.1'}, {label: 'User 3.2'}]
                },
                {
                    label: 'User 4',
                    items: [{label: 'User 4.1'}, {label: 'User 4.2'}]
                }
            ],
            [
                {
                    label: 'User 5',
                    items: [{label: 'User 5.1'}, {label: 'User 5.2'}]
                },
                {
                    label: 'User 6',
                    items: [{label: 'User 6.1'}, {label: 'User 6.2'}]
                }
            ]
        ]
    },
    {
        label: 'Events', icon: 'pi pi-fw pi-calendar',
        items: [
            [
                {
                    label: 'Event 1',
                    items: [{label: 'Event 1.1'}, {label: 'Event 1.2'}]
                },
                {
                    label: 'Event 2',
                    items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}]
                }
            ],
            [
                {
                    label: 'Event 3',
                    items: [{label: 'Event 3.1'}, {label: 'Event 3.2'}]
                },
                {
                    label: 'Event 4',
                    items: [{label: 'Event 4.1'}, {label: 'Event 4.2'}]
                }
            ]
        ]
    },
    {
        label: 'Settings', icon: 'pi pi-fw pi-cog',
        items: [
            [
                {
                    label: 'Setting 1',
                    items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]
                },
                {
                    label: 'Setting 2',
                    items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}]
                },
                {
                    label: 'Setting 3',
                    items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}]
                }
            ],
            [
                {
                    label: 'Technology 4',
                    items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]
                }
            ]
        ]
    }
]

`}
                        </CodeHighlight>

                        <CodeHighlight className="language-jsx">
                            {`
<MegaMenu model={items} />

`}
                        </CodeHighlight>

                        <h3>Orientation</h3>
                        <p>Default orientation is "horizontal" with "vertical" as the alternative.</p>
                        <CodeHighlight className="language-jsx">
                            {`
<MegaMenu model={items} orientation="vertical"/>

`}
                        </CodeHighlight>

                        <h3>Custom Content</h3>
                        <p>Any content inside the megamenu will be displayed on the right side by default. You may use ".ui-megamenu-custom" style class to change the location of the content.</p>
                        <CodeHighlight className="language-jsx">
                            {`
<MegaMenu model={items}>
    <InputText placeholder="Search" type="text"/>
    <Button label="Logout" icon="pi pi-power-off" style={{marginLeft:4}}/>
</MegaMenu>

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
                                        <td>model</td>
                                        <td>array</td>
                                        <td>null</td>
                                        <td>An array of menuitems.</td>
                                    </tr>
                                    <tr>
                                        <td>style</td>
                                        <td>string</td>
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
                                        <td>orientation</td>
                                        <td>string</td>
                                        <td>horizontal</td>
                                        <td>Defines the orientation, valid values are horizontal and vertical.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Styling</h3>
                        <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming"> theming</Link> page.</p>
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
                                        <td>p-megamenu</td>
                                        <td>Container element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-menu-list</td>
                                        <td>List element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-menuitem</td>
                                        <td>Menuitem element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-menuitem-text</td>
                                        <td>Label of a menuitem.</td>
                                    </tr>
                                    <tr>
                                        <td>p-menuitem-icon</td>
                                        <td>Icon of a menuitem.</td>
                                    </tr>
                                    <tr>
                                        <td>p-submenu-icon</td>
                                        <td>Arrow icon of a submenu.</td>
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
