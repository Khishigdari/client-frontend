import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const OrderPlaced = ({ goBackHome }: { goBackHome: () => void }) => {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive" className="py-2 px-8 rounded-full">
            Checkout
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="flex flex-col gap-6 items-center">
          <AlertDialogHeader>
            <AlertDialogTitle>
              Your order has been successfully placed !
            </AlertDialogTitle>
          </AlertDialogHeader>
          <div>
            <img src={"./illustration.svg"} />
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => goBackHome}
              className="rounded-full bg-secondary border-none"
            >
              Back to home
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default OrderPlaced;
