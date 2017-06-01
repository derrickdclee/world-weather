var React = require('react');

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
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },

  render: function() {
    var {title, message} = this.props;

    return (
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
  }
});

module.exports = ErrorModal;
