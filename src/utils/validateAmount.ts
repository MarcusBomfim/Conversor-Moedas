export interface AmountValidation {
  valid: boolean;
  message: string;
}

export function parseAmount(value: string): number {
  return Number(value.trim().replace(/\s/g, "").replace(",", "."));
}

export function validateAmount(amount: number): AmountValidation {
  if (!Number.isFinite(amount)) return { valid: false, message: "Informe um valor numérico." };
  if (amount <= 0) return { valid: false, message: "O valor precisa ser maior que zero." };
  if (amount > 1_000_000_000) return { valid: false, message: "O valor informado é muito alto." };
  return { valid: true, message: "" };
}
