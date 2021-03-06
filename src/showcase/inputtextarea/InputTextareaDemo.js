import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {InputTextarea} from '../../components/inputtextarea/InputTextarea';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class InputTextareaDemo extends Component {

    constructor() {
        super();
        this.state = {
            value: 'Welcome to PrimeLand!'
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>InputTextarea</h1>
                        <p>Inputtextarea add styling and autoResize functionality to standard textarea element.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("inputTextarea")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Default</h3>
                    <InputTextarea value={this.state.value} onChange={(e) => this.setState({value: e.target.value})} rows={5} cols={30}></InputTextarea>
                    <div>{this.state.value}</div>

                    <h3>AutoResize</h3>
                    <InputTextarea rows={5} cols={30} autoResize={true}></InputTextarea>
                </div>

                <InputTextareaDoc />
            </div>
        )
    }
}

class InputTextareaDoc extends Component {

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
import {InputTextarea} from 'primereact/inputtextarea';

export class InputTextareaDemo extends Component {

    constructor() {
        super();
        this.state = {
            value: 'Welcome to PrimeLand!'
        };
    }

    render() {
        return (
            <div>
                <h3>Default</h3>
                <InputTextarea value={this.state.value} onChange={(e) => this.setState({ value: e.target.value })} rows={5} cols={30}></InputTextarea>
                <div>{this.state.value}</div>

                <h3>AutoResize</h3>
                <InputTextarea rows={5} cols={30} autoResize={true}></InputTextarea>
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
import {InputTextarea} from 'primereact/inputtextarea';

const InputTextareaDemo = () => {
    const [value, setValue] = useState('Welcome to PrimeLand!');

    return (
        <div>
            <h3>Default</h3>
            <InputTextarea value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30}></InputTextarea>
            <div>{value}</div>

            <h3>AutoResize</h3>
            <InputTextarea rows={5} cols={30} autoResize={true}></InputTextarea>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState } from 'react';
import {InputTextarea} from 'primereact/inputtextarea';

const InputTextareaDemo = () => {
    const [value, setValue] = useState('Welcome to PrimeLand!');

    return (
        <div>
            <h3>Default</h3>
            <InputTextarea value={value} onChange={(e) => setValue((e.target as HTMLInputElement).value)} rows={5} cols={30}></InputTextarea>
            <div>{value}</div>

            <h3>AutoResize</h3>
            <InputTextarea rows={5} cols={30} autoResize={true}></InputTextarea>
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
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/inputtextarea" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="InputTextareaDemo" sources={this.sources} activeButtonIndex={this.state.activeIndex - 1} />
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
import {InputTextarea} from 'primereact/inputtextarea';

`}
</CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>Textarea is used as a controlled input with <i>value</i> and <i>onChange</i> properties.</p>
<CodeHighlight className="language-jsx">
{`
<InputTextarea rows={5} cols={30} value={this.state.value} onChange={(e) => this.setState({value: e.target.value})} />

`}
</CodeHighlight>

                        <h3>AutoResize</h3>
                        <p>In auto resize mode, textarea grows instead of displaying a scrollbar.</p>
<CodeHighlight className="language-jsx">
{`
<InputTextarea rows={5} cols={30} value={this.state.value} onChange={(e) => this.setState({value: e.target.value})} autoResize={true} />

`}
</CodeHighlight>

                        <h3>Properties</h3>
                        <p>InputTextarea passes any attribute to the underlying textarea element, additional attributes are as follows;</p>
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
                                        <td>autoResize</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>When present, height of textarea changes as being typed.</td>
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
                                </tbody>
                            </table>
                        </div>

                        <h3>Styling</h3>
                        <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming">theming</Link> page.</p>
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
                                        <td>p-inputtextarea</td>
                                        <td>Textarea element</td>
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
