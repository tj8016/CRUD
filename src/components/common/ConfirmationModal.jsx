

export default function ConfirmationModal({ modalData }) {
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      <div className="w-11/12 max-w-[350px] rounded-lg border border-[#303f61] bg-[#111827] p-6">
        <p className="text-2xl font-semibold text-richblack-5">
          {modalData?.text1}
        </p>
        <p className="mt-3 mb-5 leading-6 text-richblack-200">
          {modalData?.text2}
        </p>
        <div className="flex items-center gap-x-4">
          <button type={modalData.type} onClick={modalData?.btn1Handler} className="bg-[#cc3535] cursor-pointer rounded-md py-[8px] px-[20px] text-white">
          {modalData?.btn1Text}
          </button>
          <button
            className="cursor-pointer rounded-md bg-blue-700 hover:bg-blue-800 py-[8px] px-[20px] font-medium text-white"
            onClick={modalData?.btn2Handler}
          >
            {modalData?.btn2Text}
          </button>
        </div>
      </div>
    </div>
  )
}