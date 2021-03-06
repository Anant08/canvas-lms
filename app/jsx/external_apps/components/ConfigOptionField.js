/*
 * Copyright (C) 2014 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react'

export default React.createClass({
    displayName: 'ConfigOptionField',

    propTypes: {
      handleChange: React.PropTypes.func.isRequired,
      name: React.PropTypes.string.isRequired,
      type: React.PropTypes.string.isRequired,
      value: React.PropTypes.any,
      required: React.PropTypes.bool,
      description: React.PropTypes.string.isRequired
    },

    checkbox() {
      var checked = this.props.value ? "checked" : "";
      return (
        <div className="grid-row">
          <div className="col-xs-12">
            <label className="checkbox">
              <input type="checkbox" name={this.props.name}  data-rel={this.props.name} onChange={this.props.handleChange} checked={checked}/> {this.props.description}
            </label>
          </div>
        </div>
      );
    },

    text() {
      return (
        <div className="grid-row">
          <div className="col-xs-12">
            <label>
              {this.props.description}
              <input type="text"
                className="form-control input-block-level"
                placeholder={this.props.description}
                defaultValue={this.props.value}
                required={this.props.required}
                aria-required={this.props.required}
                data-rel={this.props.name}
                name={this.props.name}
                onChange={this.props.handleChange} />
            </label>
          </div>
        </div>
      );
    },

    render() {
      return (
        <div className="form-group">
          {this.props.type === 'checkbox' ? this.checkbox() : this.text()}
        </div>
      )
    }
  });
