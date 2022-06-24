export interface DashboardScreenProps {
  text: string;
}

export const DashboardScreen = (props: DashboardScreenProps) => {
  return (
    <div className="space-y-8 flex flex-col items-center justify-center h-[100vh]">
      <div className="text-center">
        <h1>Welcome to Duspteco!</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
};
