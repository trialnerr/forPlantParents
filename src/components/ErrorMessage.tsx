type ErrorMessageProps = {
  errMsg?: string;
}

function ErrorMessage({errMsg}: ErrorMessageProps) {
  return (
    <section className="relative">
      <p aria-live="assertive" className={errMsg ? "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-2" : "hidden"}>
        {errMsg}
      </p>
    </section>
  )
}

export default ErrorMessage
