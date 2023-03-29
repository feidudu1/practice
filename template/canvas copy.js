for (const subName in currentSubPinIdToPinInstanceIds) {
  const pinnameToPininstanceObj = nonNullable(
    currentSubPinIdToPinInstanceIds[subName]
  );
  for (const pinName in pinnameToPininstanceObj) {
    const pinInstanceId = nonNullable(pinnameToPininstanceObj[pinName]);
    const { modelInstanceId } = parsePinInstanceId(pinInstanceId);
    const modelInstance = nonNullable(
      currentModelInstances[modelInstanceId]
    );
    const key = subName + "_" + pinName;
    const jointEqtType = getEqtTypeFromPinId({
      modelInstance,
      pinName,
      rawSchematic: content,
    });
    const subEqtTypeKey = isSubUnit(modelInstance) ? subName : pinName;
    setDefault(subEqtTypes, key, {}).type = jointEqtType;
    setDefault(subEqtTypes, key, {})[subEqtTypeKey] = jointEqtType;
    console.log(11111, "current", jointEqtType, subEqtTypeKey);
    needUpdateContents.push(key);
  }
}


export const getEqtTypeFromPinId = ({
  modelInstance,
  rawSchematic,
  pinName,
}: {
  modelInstance: RawModelInstance;
  pinName: string;
  rawSchematic: Required<RawSchematic>;
}): PinType => {
  const {
    joints,
    supplement: { jointPinConnections, jointConnections },
  } = rawSchematic;
  const { pins } = modelInstance.model;
  const index = isSubUnit(modelInstance)
    ? 0
    : pins.findIndex((pin) => pin.name === pinName);
  const jointId = modelInstance.pinJointConnections[index];
  if (index === -1 || !pins[index] || !jointId) {
    return "UNIVERSAL";
  }
  const joint = nonNullable(joints[jointId]);
  const { eqtPinInstances } = searchEquipotentialUnits(joint, {
    ...rawSchematic,
    supplement: { jointPinConnections, jointConnections },
  });
  const newEqtType = getPriorityPin(eqtPinInstances)?.pin.type || "UNIVERSAL";
  return newEqtType;
};