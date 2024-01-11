import OpenAI from "openai";
import { OPENAI__KEY } from "./Constant";

const openai = new OpenAI({
  apiKey: OPENAI__KEY, // This is the default and can be omitted
});
export default openai;
