import React from "react";
import {IncrementProps} from "./stores/incrementTypes";
import {observer} from "mobx-react";
import {Button} from "@nx-repo/ui-component";
import {incrementStore} from "./stores/incrementStore";
import Link from "next/link";
import * as process from "process";

export const Increment: React.FC<IncrementProps> = observer(() => {

  return (
    <div className={'container flex'}>
      <Button onClick={incrementStore.setDecrementValue}>Decrement</Button>
      <Link href={{
        pathname: `${process.env.SAMPLE_2_FRONT_END_URL}/sample`
      }}><Button>Navigate to different app page</Button></Link>
      <Link href={{
        pathname: '/sample'
      }}><Button>Navigate to Sample page</Button></Link>
      <div className={'p-6'}>{incrementStore.getValue}</div>
      <Button onClick={incrementStore.setIncrementValue}>Increment</Button>

      <Link href={{
        pathname: '/products/[id]',
        query: { id: incrementStore.getValue },
      }}><Button>Navigate to ID page</Button></Link>
    </div>
  );
});
