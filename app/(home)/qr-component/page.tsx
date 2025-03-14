const QrComponent = () => {
  return (
    <>
      <main className="card-container round-component-edge">
        <div className="card-img-container">
          <img
            src="/site-images/image-qr-code.png"
            alt="qr code image"
            width="100%"
            className="round-component-edge"
            loading="lazy"
          />
        </div>
        <div className="card-content">
          <h2 className="card-title">
            Improve your frontend skills by building project
          </h2>
          <p className="card-text">
            Scan the QR code to visit frontend mentor and take your coding
            skills to the next level
          </p>
        </div>
      </main>
      <footer className="attribution">
        <h2 className="center">
          Challenge by
          <a href="https://github.io/adeisbright/core-frontend-revival/qr-code-component.html">
            Frontend Mentor
          </a>
          | Coded by
          <a href="https://github.io/adeisbright/core-frontend-revival/qr-code-component.html">
            Adeleke Bright
          </a>
        </h2>
      </footer>
    </>
  );
};

export default QrComponent;
