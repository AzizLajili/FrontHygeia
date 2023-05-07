enum status {
  Cancelled, Ongoing, Completed
}

export class Treatment{
  id: number;
  dosage: number;
  frequence: number;
  dateDeb: Date;
  dateFin: Date;
  pillCount: number;
  status: status.Ongoing;
}
