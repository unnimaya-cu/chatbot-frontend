const withMessage = (WrappedComponent: any) => {
  return () => {
    return (
      <div>
        <h1>Welcome User</h1>
        <WrappedComponent />
      </div>
    );
  };
};
export default withMessage;
