import React from 'react';

export default class UserView extends React.Component<{}, {}> {
    public render() {
        return (
            <table>
                <tr>
                    <td>id</td>
                    <td>login</td>
                    <td>password</td>
                    <td>creation_date</td>
                    <td>last_login</td>
                    <td>active</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        );
    }
}