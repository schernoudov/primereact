import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Chips} from '../../components/chips/Chips';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class ChipsDemo extends Component {

    constructor() {
        super();
        this.state = {
            values1: [],
            values2: [],
            values3: []
        };
    }

    customChip(item) {
        return (
            <div>
                <span>{item} - (active) </span>
                <i className="pi pi-user-plus" style={{fontSize: '14px'}}></i>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Chips</h1>
                        <p>Chips is used to enter multiple values on an input field.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("chips")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation p-fluid">
                    <h3>Basic</h3>
                    <Chips value={this.state.values1} onChange={(e) => this.setState({values1: e.value})}></Chips>

                    <h3>Comma Separator</h3>
                    <Chips value={this.state.values2} onChange={(e) => this.setState({values2: e.value})} separator=','></Chips>

                    <h3>Template</h3>
                    <Chips value={this.state.values3} onChange={(e) => this.setState({values3: e.value})} max={5} itemTemplate={this.customChip}></Chips>
                </div>

                <ChipsDoc/>
            </div>
        )
    }
}

class ChipsDoc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };

        this.sources = {
            'app': {
                tabName: 'Source',
                content: `
import React, {Component} from 'react';
import {Chips} from 'primereact/chips';

export class ChipsDemo extends Component {

    constructor() {
        super();
        this.state = {
            values1: [],
            values2: [],
            values3: []
        };
    }

    customChip(item) {
        return (
            <div>
                <span>{item} - (active) </span>
                <i className="pi pi-user-plus" style={{fontSize: '14px'}}></i>
            </div>
        );
    }

    render() {
        return (
            <div className="p-fluid">
                <h3>Basic</h3>
                <Chips value={this.state.values1} onChange={(e) => this.setState({values1: e.value})}></Chips>

                <h3>Comma Separator</h3>
                <Chips value={this.state.values2} onChange={(e) => this.setState({values2: e.value})} separator=','></Chips>

                <h3>Template</h3>
                <Chips value={this.state.values3} onChange={(e) => this.setState({values3: e.value})} max={5} itemTemplate={this.customChip}></Chips>
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
import {Chips} from 'primereact/chips';

const ChipsDemo = () => {
    const [values1, setValues1] = useState([]);
    const [values2, setValues2] = useState([]);
    const [values3, setValues3] = useState([]);

    const customChip = (item) => {
        return (
            <div>
                <span>{item} - (active) </span>
                <i className="pi pi-user-plus" style={{fontSize: '14px'}}></i>
            </div>
        );
    }

    return (
        <div className="p-fluid">
            <h3>Basic</h3>
            <Chips value={values1} onChange={(e) => setValues1(e.value)}></Chips>

            <h3>Comma Separator</h3>
            <Chips value={values2} onChange={(e) => setValues2(e.value)} separator=','></Chips>

            <h3>Template</h3>
            <Chips value={values3} onChange={(e) => setValues3(e.value)} max={5} itemTemplate={customChip}></Chips>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState } from 'react';
import {Chips} from 'primereact/chips';

const ChipsDemo = () => {
    const [values1, setValues1] = useState([]);
    const [values2, setValues2] = useState([]);
    const [values3, setValues3] = useState([]);

    const customChip = (item: string) => {
        return (
            <div>
                <span>{item} - (active) </span>
                <i className="pi pi-user-plus" style={{fontSize: '14px'}}></i>
            </div>
        );
    }

    return (
        <div className="p-fluid">
            <h3>Basic</h3>
            <Chips value={values1} onChange={(e) => setValues1(e.value)}></Chips>

            <h3>Comma Separator</h3>
            <Chips value={values2} onChange={(e) => setValues2(e.value)} separator=','></Chips>

            <h3>Template</h3>
            <Chips value={values3} onChange={(e) => setValues3(e.value)} max={5} itemTemplate={customChip}></Chips>
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
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/chips" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="ChipsDemo" sources={this.sources} activeButtonIndex={this.state.activeIndex - 1} />
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
import {Chips} from 'primereact/chips';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>Chips requires an array as its <i>value</i> and <i>onChange</i> callback to update the model.</p>

<CodeHighlight className="language-jsx">
{`
<Chips value={this.state.value} onChange={(e) => this.setState({value: e.value})}></Chips>

`}
</CodeHighlight>

            <h3>Custom Content</h3>
            <p>A chip is customized using <i>itemTemplate</i> function where value is passed to return JSX.</p>
<CodeHighlight className="language-jsx">
{`
<Chips value={this.state.value} onChange={(e) => this.setState({value: e.value})} itemTemplate={this.customChip}></Chips>

`}
</CodeHighlight>
<CodeHighlight className="language-javascript">
{`
customChip(item) {
    return (
        <div>
            <span>{item} - (active) </span>
            <i className="pi pi-user-plus"></i>
        </div>
    );
}

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
                            <td>Unique identifier of the component.</td>
                        </tr>
                        <tr>
                            <td>name</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Name of the input field.</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Advisory information to display on input.</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>array</td>
                            <td>null</td>
                            <td>Value of the component.</td>
                        </tr>
                        <tr>
                            <td>max</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Maximum number of entries allowed.</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When present, it specifies that the element should be disabled.</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the element.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the element.</td>
                        </tr>
                        <tr>
                            <td>tooltip</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Content of the tooltip.</td>
                        </tr>
                        <tr>
                            <td>tooltipOptions</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Configuration of the tooltip, refer to the tooltip documentation for more information.</td>
                        </tr>
                        <tr>
                            <td>ariaLabelledBy</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Establishes relationships between the component and label(s) where its value should be one or more element IDs.</td>
                        </tr>
                        <tr>
                            <td>allowDuplicate</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Whether to allow duplicate values or not.</td>
                        </tr>
                        <tr>
                            <td>separator</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Separator char to add an item when pressed in addition to the enter key. Currently only possible value is ","</td>
                        </tr>
                        <tr>
                            <td>itemTemplate</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Template function to return the content of a chip.</td>
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
                            <td>onChange</td>
                            <td>originalEvent: Browser event <br/>
                                value: New value of the component</td>
                            <td>Callback to invoke when a chip is added or removed.</td>
                        </tr>
                        <tr>
                            <td>onAdd</td>
                            <td>originalEvent: Browser event <br/>
                                value: Added item value</td>
                            <td>Callback to invoke when a chip is added.</td>
                        </tr>
                        <tr>
                            <td>onRemove</td>
                            <td>originalEvent: Browser event <br/>
                                value: Removed item value</td>
                            <td>Callback to invoke when a chip is removed.</td>
                        </tr>
                        <tr>
                            <td>onFocus</td>
                            <td>event: Browser event</td>
                            <td>Callback to invoke when the component gets focus.</td>
                        </tr>
                        <tr>
                            <td>onBlur</td>
                            <td>event: Browser event</td>
                            <td>Callback to invoke when the component loses focus.</td>
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
                            <td>p-chips</td>
                            <td>Container element</td>
                        </tr>
                        <tr>
                            <td>p-chips-token</td>
                            <td>Chip element container.</td>
                        </tr>
                        <tr>
                            <td>p-chips-token-icon</td>
                            <td>Icon of a chip.</td>
                        </tr>
                        <tr>
                            <td>p-chips-token-label</td>
                            <td>label of a chip.</td>
                        </tr>
                        <tr>
                            <td>p-chips-input-token</td>
                            <td>Container of input element.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Dependencies</h3>
            <p>None.</p>
        </TabPanel>

        {
            this.sources && Object.entries(this.sources).map(([key, value], index) => {
                const header = key === 'app' ? 'Source' : `${key} Source`;
                return (
                    <TabPanel key={`source_${index}`} header={header}>
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
        );
    }
}
