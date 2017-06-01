var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  getDefaultProps: function() {
    return {
      title: 'Error'
    };
  },

  componentDidMount: function() {
    var {title, message} = this.props;

    var modalMarkup = (
      // Great question! If we add data-close to the JSX the resulting HTML
      // attribute will be data-close="true" . This transformation is made when
      // compiling the JSX. If you add data-close=""  to the JSX, the resulting
      // HTML attribute will be data-close . This is what Foundation expects.
      <div id='error-modal' className='reveal tiny text-center' data-reveal=''>
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className='button hollow' data-close=''>
            Okay
          </button>
        </p>
      </div>
    );

    // If a string is passed as the parameter to $(), jQuery examines the string
    // to see if it looks like HTML (i.e., it starts with <tag ... >). If not, the
    // string is interpreted as a selector expression, as explained above. But if
    // the string appears to be an HTML snippet, jQuery attempts to create new DOM
    // elements as described by the HTML. Then a jQuery object is created and
    // returned that refers to these elements. You can perform any of the usual
    // jQuery methods on this object:

    // creating a new jQuery object
    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal); // appending

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },

  render: function() {
    return (
      <div></div>
    );
  }
});

module.exports = ErrorModal;
