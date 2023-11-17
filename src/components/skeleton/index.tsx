import { Skeleton, CardContent } from "@mui/material";

export const SkeletonComponent = () => {
  return Array.from(new Array(8)).map(() => (
    <CardContent
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 ",
        background: "#FFF",
        borderRadius: ".3rem",
        maxWidth: "293px",
      }}
    >
      <Skeleton
        data-testid="skeleton"
        variant="rectangular"
        animation="wave"
        width={260}
        height={240}
        style={{ marginTop: "1rem", borderRadius: ".3rem" }}
      />
      <CardContent
        style={{
          display: "flex",
          gap: "60px",
          borderRadius: ".3rem",
        }}
      >
        <Skeleton
          data-testid="skeleton"
          variant="rectangular"
          animation="wave"
          width={125}
          height={30}
          style={{ borderRadius: ".3rem" }}
        />
        <Skeleton
          data-testid="skeleton"
          variant="rectangular"
          animation="wave"
          width={75}
          height={30}
          style={{ borderRadius: ".3rem" }}
        />
      </CardContent>
      <Skeleton
        data-testid="skeleton"
        variant="rectangular"
        animation="wave"
        width={260}
        height={53}
        style={{ borderRadius: ".3rem" }}
      />
      <Skeleton
        data-testid="skeleton"
        variant="rectangular"
        animation="wave"
        width={260}
        height={39}
        style={{
          marginTop: ".7rem",
          marginBottom: "1rem",
          borderRadius: ".3rem",
        }}
      />
    </CardContent>
  ));
};
