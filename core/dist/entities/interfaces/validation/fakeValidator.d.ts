import { Fake } from "../../fake";
import { ValidationResult } from "./validationResult";
export interface FakeValidator {
    validate(fake: Fake): ValidationResult;
}
