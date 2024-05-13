'use client'

import { Container } from "react-bootstrap";
import CompoundInterestCalculator from "./calculateur";

export default function TestPage() {
  return (
    <Container className="mt-4">
        <div>
          <CompoundInterestCalculator />
        </div>
    </Container>
  );
}