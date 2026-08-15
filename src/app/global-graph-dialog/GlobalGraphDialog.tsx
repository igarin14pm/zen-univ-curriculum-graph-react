interface GlobalGraphDialogProp {
  isVisible: boolean;
}

const GlobalGraphDialog = ({ isVisible }: GlobalGraphDialogProp): React.JSX.Element => {
  return (
    <div style={{ display: isVisible ? 'block' : 'none' }}>
      <p>Global Graph Dialog</p>
    </div>
  );
};

export default GlobalGraphDialog;

// TODO: 続きを書く
