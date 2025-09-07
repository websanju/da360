import { useEffect, useState } from "react";
import { SlotBookingFormType } from "@/types/courses";
import { daApi } from "@/api/apiConfig";
import { SLOT_BOOKING_API } from "@/api/apiUrl";
import { useRouter } from "next/navigation";

interface UseLeadCaptureFormProps {
  courseId: string;
  closePopup?: () => void;
}

export const useLeadCaptureForm = ({courseId, closePopup}: UseLeadCaptureFormProps) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [firstLandedUrl, setFirstLandedUrl] = useState<string>("");

  useEffect(() => {
    // Runs once when the component mounts
    setFirstLandedUrl(window.location.href);
  }, []);

  const onSubmit = async (data: SlotBookingFormType) => {
    try {
      setLoading(true);
      const requestData = {
        ...data,
        firstLandedUrl,
        finalUrl: window.location.href,
        "form-name_cta-text": "form_slot_booking",
        course_program: courseId || "pgp_dm",
      };
      const response = await daApi.post(SLOT_BOOKING_API, requestData);
      if (response.status === 200) {
        setLoading(false);
        if (closePopup) {
          closePopup();
        }
        router.push("/slot-booking-success");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    onSubmit,
  };
};

export default useLeadCaptureForm;
