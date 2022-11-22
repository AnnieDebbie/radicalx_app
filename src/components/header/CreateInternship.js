import "./CreateInternship.css"

const CreateInternship = () => {
  return (
    <div>
      <button className="create-internship-btn">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.4917 10H13.3334"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.66663 10H9.84163"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 13.3332V6.6665"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1.66663 10.8665V12.4998C1.66663 16.6665 3.33329 18.3332 7.49996 18.3332H12.5C16.6666 18.3332 18.3333 16.6665 18.3333 12.4998V7.49984C18.3333 3.33317 16.6666 1.6665 12.5 1.6665H7.49996C3.33329 1.6665 1.66663 3.33317 1.66663 7.49984"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>Create new internship</span>
      </button>
    </div>
  );
};

export default CreateInternship